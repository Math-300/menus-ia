# Wompi Billing Rules (Colombia)

## Trigger
- `**/billing/**` directory
- `**/payment/**` directory
- `**/wompi/**` directory

## Ambientes

| Ambiente | URL Base | Prefijo Llaves |
|----------|----------|----------------|
| Sandbox | `https://sandbox.wompi.co/v1` | `pub_test_`, `prv_test_` |
| Producción | `https://production.wompi.co/v1` | `pub_prod_`, `prv_prod_` |

## Llaves de Autenticación

### Tipos de Llaves
- **Llave Pública** (`pub_*`): Para frontend (Widget, Checkout)
- **Llave Privada** (`prv_*`): Para backend (API calls)
- **Secreto de Integridad** (`*_integrity_`): Para firmar transacciones
- **Secreto de Eventos** (`*_events_`): Para verificar webhooks

## Métodos de Integración

### 1. Widget (Recomendado)
Pago sin salir del sitio web:

```html
<form>
  <script
    src="https://checkout.wompi.co/widget.js"
    data-render="button"
    data-public-key="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
    data-currency="COP"
    data-amount-in-cents="4950000"
    data-reference="4XMPGKWWPKWQ"
    data-signature:integrity="HASH_SHA256"
  ></script>
</form>
```

### 2. Web Checkout
Redirección a Wompi:

```html
<form action="https://checkout.wompi.co/p/" method="GET">
  <input type="hidden" name="public-key" value="LLAVE_PUBLICA" />
  <input type="hidden" name="currency" value="COP" />
  <input type="hidden" name="amount-in-cents" value="MONTO_CENTAVOS" />
  <input type="hidden" name="reference" value="REFERENCIA" />
  <input type="hidden" name="signature:integrity" value="FIRMA" />
  <button type="submit">Pagar con Wompi</button>
</form>
```

### 3. API Directa (Backend)
Para integraciones personalizadas:

```typescript
// Crear transacción
const response = await fetch('https://production.wompi.co/v1/transactions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${WOMPI_PRIVATE_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount_in_cents: 4950000,
    currency: 'COP',
    customer_email: 'cliente@email.com',
    payment_method: { type: 'CARD' },
    reference: 'ORDER-123',
    session_id: sessionId, // De Wompi JS
    customer_data: {
      device_id: deviceId
    }
  })
});
```

## Firma de Integridad (SHA256)

### Generación del Hash
```typescript
// En backend NUNCA en frontend
import crypto from 'crypto';

function generateIntegritySignature(
  reference: string,
  amountInCents: number,
  currency: string,
  integritySecret: string,
  expirationTime?: string
): string {
  let concatenated = `${reference}${amountInCents}${currency}`;
  
  if (expirationTime) {
    concatenated += expirationTime;
  }
  
  concatenated += integritySecret;
  
  return crypto
    .createHash('sha256')
    .update(concatenated)
    .digest('hex');
}

// Ejemplo
const signature = generateIntegritySignature(
  'ORDER-123',           // referencia
  4950000,               // monto en centavos
  'COP',                 // moneda
  'prod_integrity_XXX',  // secreto
  '2024-12-31T23:59:59.000Z' // expiración (opcional)
);
```

## Wompi JS (Antifraude)

### Inclusión
```html
<script src="https://wompijs.wompi.com/libs/js/v1.js" data-public-key="LLAVE_PUBLICA"></script>
```

### Inicialización
```typescript
$wompi.initialize(function(data, error) {
  if (error === null) {
    const sessionId = data.sessionId;
    const deviceId = data.deviceData.deviceID;
    // Usar en transacción
  }
});
```

## Widget Personalizado

```typescript
const checkout = new WidgetCheckout({
  currency: 'COP',
  amountInCents: 2490000,
  reference: 'ORDER-123',
  publicKey: 'pub_test_XXX',
  signature: { integrity: 'hash_sha256' },
  redirectUrl: 'https://misitio.com/pago/respuesta',
  expirationTime: '2024-12-31T23:59:59.000Z',
  taxInCents: {
    vat: 190000,      // IVA
    consumption: 80000 // Impoconsumo
  },
  customerData: {
    email: 'cliente@email.com',
    fullName: 'Nombre Cliente',
    phoneNumber: '3011234567',
    phoneNumberPrefix: '+57',
    legalId: '1234567890',
    legalIdType: 'CC' // CC, CE, NIT, PP, TI
  },
  shippingAddress: {
    addressLine1: 'Calle 123 # 4-5',
    city: 'Bogota',
    phoneNumber: '3011234567',
    region: 'Cundinamarca',
    country: 'CO'
  }
});

// Abrir widget
checkout.open(function(result) {
  const transaction = result.transaction;
  console.log('Transaction ID:', transaction.id);
});
```

## Webhooks

### Estructura del Evento
```typescript
interface WompiEvent {
  event: string;
  data: {
    transaction: {
      id: string;
      status: 'APPROVED' | 'DECLINED' | 'VOIDED' | 'PENDING';
      amount_in_cents: number;
      currency: string;
      reference: string;
      customer_email: string;
      payment_method: {
        type: 'CARD' | 'NEQUI' | 'PSE' | 'BANCOLOMBIA_TRANSFER';
      };
      created_at: string;
    };
  };
  timestamp: number;
  signature: {
    checksum: string;
    properties: string[];
  };
}
```

### Handler
```typescript
// app/api/webhooks/wompi/route.ts
export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('x-wompi-signature');
  
  // Verificar firma del webhook
  if (!verifyWebhookSignature(body, signature)) {
    return new Response('Invalid signature', { status: 401 });
  }
  
  const event = JSON.parse(body);
  
  switch (event.data.transaction.status) {
    case 'APPROVED':
      // Confirmar orden
      await confirmOrder(event.data.transaction.reference);
      break;
    case 'DECLINED':
      // Notificar rechazo
      await notifyDeclined(event.data.transaction);
      break;
    case 'VOIDED':
      // Reembolso
      await handleVoided(event.data.transaction);
      break;
  }
  
  return new Response('OK', { status: 200 });
}
```

## Parámetros Obligatorios

| Parámetro | Descripción |
|-----------|-------------|
| `public-key` | Llave pública del comercio |
| `currency` | Moneda (solo COP disponible) |
| `amount-in-cents` | Monto en centavos (ej: $95,000 = 9500000) |
| `reference` | Referencia única de pago |
| `signature:integrity` | Hash SHA256 de integridad |

## Parámetros Opcionales

| Parámetro | Descripción |
|-----------|-------------|
| `redirect-url` | URL de redirección post-pago |
| `expiration-time` | Fecha expiración (ISO8601) |
| `tax-in-cents:vat` | IVA en centavos |
| `tax-in-cents:consumption` | Impoconsumo en centavos |
| `customer-data:email` | Email del pagador |
| `customer-data:full-name` | Nombre completo |
| `customer-data:phone-number` | Teléfono |
| `customer-data:legal-id` | Documento |
| `customer-data:legal-id-type` | Tipo documento (CC, CE, NIT, PP, TI) |
| `shipping-address:*` | Dirección de envío |

## Tipos de Documento

| Código | Descripción |
|--------|-------------|
| CC | Cédula de Ciudadanía |
| CE | Cédula de Extranjería |
| NIT | Número de Identificación Tributaria |
| PP | Pasaporte |
| TI | Tarjeta de Identidad |
| DNI | Documento Nacional de Identidad |
| RG | Carteira de Identidade (Brasil) |
| OTHER | Otro |

## Medios de Pago Soportados

- Tarjetas de Crédito/Débito
- PSE (Débito a cuenta bancaria)
- Nequi
- Transferencia Bancolombia
- Efectivo (Baloto, Su Red)

## Database Schema

```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  order_id UUID REFERENCES orders(id),
  wompi_transaction_id TEXT UNIQUE,
  reference TEXT UNIQUE NOT NULL,
  amount_in_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'COP',
  status TEXT NOT NULL, -- PENDING, APPROVED, DECLINED, VOIDED
  payment_method JSONB,
  customer_email TEXT,
  wompi_response JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_payments_reference ON payments(reference);
CREATE INDEX idx_payments_wompi_id ON payments(wompi_transaction_id);
CREATE INDEX idx_payments_status ON payments(status);
```

## Best Practices

1. **Seguridad**
   - NUNCA exponer llave privada en frontend
   - Generar firma de integridad en backend
   - Verificar webhooks con signature
   - Usar HTTPS siempre

2. **Referencias**
   - Usar referencias únicas por transacción
   - No reutilizar referencias
   - Formato alfanumérico con guiones permitidos

3. **Montos**
   - Siempre en centavos
   - Moneda COP únicamente
   - Los impuestos NO se suman al total

4. **Estados**
   - Aprobar orden solo en webhook (no en redirect)
   - Manejar todos los estados posibles
   - Loggear transacciones para debugging
