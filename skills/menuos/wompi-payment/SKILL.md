# Wompi Payment Skill

Generate Wompi payment integration for Colombian restaurants.

## Trigger
Manual: `/wompi-payment`

## Parameters
- `operation`: Type of operation
  - `setup`: Initial Wompi setup
  - `widget`: Widget integration
  - `checkout`: Web checkout integration
  - `webhooks`: Webhook handlers
  - `api`: Direct API integration

## Output for Setup
```
lib/
└── wompi/
    ├── client.ts               # Wompi API client
    ├── signature.ts            # Integrity signature generator
    ├── widget.ts               # Widget configuration
    └── webhooks.ts             # Webhook handlers

app/api/webhooks/
└── wompi/
    └── route.ts                # Webhook endpoint

app/admin/payments/
├── page.tsx                    # Payment overview
└── _components/
    ├── PaymentStatus.tsx
    └── TransactionList.tsx

types/
└── wompi.ts                    # TypeScript types
```

## Environment Variables
```env
# Wompi (Colombia)
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=        # pub_test_ or pub_prod_
WOMPI_PRIVATE_KEY=                    # prv_test_ or prv_prod_
WOMPI_INTEGRITY_SECRET=               # For signature generation
WOMPI_EVENTS_SECRET=                  # For webhook verification
```

## Example Usage
```
/wompi-payment operation="setup"
/wompi-payment operation="widget"
/wompi-payment operation="webhooks"
```

## Rules Applied
- `rules/wompi-billing.md`
- `rules/security.md`
