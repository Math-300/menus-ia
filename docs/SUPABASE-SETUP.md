# Guía de Configuración de Supabase para MenuOS

Esta guía te llevará paso a paso por la configuración del backend de Supabase para MenuOS.

## 📋 Prerrequisitos

- Cuenta en [Supabase](https://supabase.com) (puedes crear una gratis)
- Proyecto MenuOS clonado localmente

---

## 🚀 Paso 1: Crear el Proyecto en Supabase

### 1.1 Acceder a Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Inicia sesión con tu cuenta
3. Haz clic en **"New Project"**

### 1.2 Configurar el Proyecto

| Campo | Valor Recomendado |
|-------|-------------------|
| **Name** | `menuos` |
| **Database Password** | *Genera una contraseña segura y guárdala* |
| **Region** | `US East (North Virginia)` - Mejor latencia para Colombia |
| **Plan** | Free (para desarrollo) |

> ⚠️ **Importante**: La contraseña de la base de datos solo se muestra una vez. Guárdala en un gestor de contraseñas.

### 1.3 Esperar la Creación

El proceso de creación tarda aproximadamente **2-3 minutos**. Verás un indicador de progreso.

---

## 🗄️ Paso 2: Ejecutar las Migraciones

### 2.1 Abrir el Editor SQL

1. En el dashboard de tu proyecto, ve a **SQL Editor** en el menú lateral izquierdo
2. Haz clic en **"New Query"**

### 2.2 Ejecutar el Script de Migración

1. Abre el archivo [`supabase/migrations/001_initial_schema.sql`](../supabase/migrations/001_initial_schema.sql)
2. Copia todo el contenido del archivo
3. Pégalo en el editor SQL de Supabase
4. Haz clic en **"Run"** (o presiona `Ctrl + Enter`)

### 2.3 Verificar la Ejecución

Si todo salió bien, verás:
- Mensaje "Success. No rows returned"
- Las tablas creadas en **Table Editor** > **Tables**

Debes ver las siguientes tablas:
- ✅ `tenants`
- ✅ `users`
- ✅ `categories`
- ✅ `dishes`
- ✅ `dish_option_groups`
- ✅ `dish_options`
- ✅ `stories`
- ✅ `orders`
- ✅ `order_items`

---

## 🔑 Paso 3: Obtener las Credenciales

### 3.1 Ir a Configuración

1. En el menú lateral, haz clic en el icono de **engranaje** (Settings)
2. Selecciona **API** en el submenú

### 3.2 Copiar las Credenciales

Necesitas estos tres valores:

| Credencial | Ubicación | Uso |
|------------|-----------|-----|
| **Project URL** | Sección "Project URL" | URL base de la API |
| **anon public** | Sección "Project API keys" | Clave pública para el cliente |
| **service_role** | Sección "Project API keys" | Clave secreta para operaciones admin |

> ⚠️ **Seguridad**: La clave `service_role` tiene permisos completos. **Nunca** la expongas en el código del cliente.

---

## ⚙️ Paso 4: Configurar Variables de Entorno

### 4.1 Crear el Archivo .env.local

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# En la raíz del proyecto MenuOS
touch .env.local
```

### 4.2 Agregar las Variables

Copia el siguiente contenido y reemplaza los valores con tus credenciales:

```env
# ===========================================
# Supabase Configuration
# ===========================================

# Tu Project URL de Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto-id.supabase.co

# Clave pública (anon) - Segura para el cliente
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anon-aqui

# Clave de servicio - SOLO para operaciones de servidor
SUPABASE_SERVICE_ROLE_KEY=tu-clave-service-role-aqui

# ===========================================
# App Configuration
# ===========================================

# URL de la aplicación (para webhooks y redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# ===========================================
# Opcionales (para funcionalidades futuras)
# ===========================================

# OpenRouter para IA (opcional)
OPENROUTER_API_KEY=tu-api-key-openrouter

# Cloudinary para imágenes (opcional)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name
CLOUDINARY_API_KEY=tu-api-key
CLOUDINARY_API_SECRET=tu-api-secret

# Wompi para pagos (opcional)
WOMPI_PUBLIC_KEY=tu-public-key
WOMPI_PRIVATE_KEY=tu-private-key
WOMPI_INTEGRITY_SECRET=tu-integrity-secret
```

### 4.3 Verificar la Configuración

```bash
# Reiniciar el servidor de desarrollo
npm run dev
```

Si todo está correcto, no verás errores de conexión a Supabase.

---

## 🌱 Paso 5: Poblar Datos de Demostración

### 5.1 Ejecutar el Script Seed

1. Abre el archivo [`supabase/seed.sql`](../supabase/seed.sql)
2. Copia todo el contenido
3. Ve al **SQL Editor** en Supabase
4. Crea una nueva query y pega el contenido
5. Ejecuta el script

### 5.2 Verificar los Datos

En **Table Editor**, verifica que tengas:

| Tabla | Registros de Demo |
|-------|-------------------|
| `tenants` | 3 restaurantes |
| `categories` | ~15 categorías |
| `dishes` | ~30 platos |
| `stories` | ~9 stories |

### 5.3 Probar la Aplicación

Visita los slugs de demo:
- `http://localhost:3000/demo-grill`
- `http://localhost:3000/sushi-master`
- `http://localhost:3000/green-eats`

---

## 🔒 Paso 6: Configurar Autenticación (Opcional)

### 6.1 Habilitar Proveedores

1. Ve a **Authentication** > **Providers**
2. Habilita los proveedores que necesites:
   - **Email** (habilitado por defecto)
   - **Google** (requiere OAuth setup)
   - **Magic Link** (passwordless)

### 6.2 Configurar URLs

En **Authentication** > **URL Configuration**:

| Campo | Valor |
|-------|-------|
| **Site URL** | `http://localhost:3000` |
| **Redirect URLs** | `http://localhost:3000/**` |

---

## 📊 Paso 7: Configurar Storage (Opcional)

Para subir imágenes de platos y logos:

### 7.1 Crear Buckets

1. Ve a **Storage** en el menú lateral
2. Crea los siguientes buckets:

| Bucket | Público | Uso |
|--------|---------|-----|
| `logos` | ✅ Sí | Logos de restaurantes |
| `dishes` | ✅ Sí | Fotos de platos |
| `stories` | ✅ Sí | Imágenes de stories |
| `covers` | ✅ Sí | Imágenes de portada |

### 7.2 Configurar Políticas

Para cada bucket público, ejecuta en SQL Editor:

```sql
-- Política para permitir lectura pública
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'dishes');

-- Política para permitir upload autenticado
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'dishes');
```

---

## ✅ Verificación Final

Ejecuta esta checklist para verificar que todo está configurado:

- [ ] Proyecto creado en Supabase
- [ ] Migración ejecutada sin errores
- [ ] Variables de entorno configuradas
- [ ] Datos de demo insertados
- [ ] Aplicación conecta correctamente
- [ ] Puedes ver los menús de demo

---

## 🐛 Solución de Problemas

### Error: "Invalid API key"

**Causa**: Las credenciales no están configuradas correctamente.

**Solución**:
1. Verifica que `.env.local` existe en la raíz
2. Confirma que las claves no tienen espacios extra
3. Reinicia el servidor de desarrollo

### Error: "relation does not exist"

**Causa**: La migración no se ejecutó correctamente.

**Solución**:
1. Ve a SQL Editor
2. Ejecuta `SELECT * FROM tenants LIMIT 1;`
3. Si da error, vuelve a ejecutar la migración

### Error: "RLS policy violation"

**Causa**: Las políticas RLS están bloqueando el acceso.

**Solución**:
1. Verifica que el tenant esté activo (`is_active = true`)
2. Confirma que estás usando la clave `anon` para el cliente
3. Usa `service_role` solo en el servidor

### Las imágenes no cargan

**Causa**: Los buckets de Storage no están configurados.

**Solución**:
1. Ve a Storage en Supabase
2. Crea los buckets necesarios
3. Configura las políticas de acceso

---

## 📚 Recursos Adicionales

- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Storage en Supabase](https://supabase.com/docs/guides/storage)
- [Mejores Prácticas PostgreSQL](../skills/supabase-postgres-best-practices/README.md)

---

## 🎯 Siguientes Pasos

Una vez configurado Supabase:

1. **Personalizar el menú**: Usa el panel admin para agregar tus platos
2. **Configurar pagos**: Integra Wompi para recibir pagos
3. **Personalizar branding**: Cambia colores y logo en la configuración del tenant
4. **Deploy**: Despliega en Vercel con las variables de entorno

---

*Última actualización: Febrero 2026*
