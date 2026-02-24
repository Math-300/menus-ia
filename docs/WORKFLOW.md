# Workflow del Equipo - MenuOS

## 👥 Roles y Responsabilidades

| Desarrollador | Rol | Directorios Principales |
|---------------|-----|------------------------|
| **Dev Backend** | APIs, DB, Servicios | `src/app/api/`, `src/lib/`, `supabase/` |
| **Dev Frontend** | UI, Páginas, Estilos | `src/components/`, `src/app/(tenant)/`, `src/hooks/` |

---

## 📁 Estructura de Directorios por Responsable

### Backend (Tú)
```
src/
├── app/api/              # API Routes
│   ├── ai/               # Endpoints de IA
│   ├── upload/           # Upload de imágenes
│   └── webhooks/         # Webhooks (Wompi, etc.)
├── lib/
│   ├── ai/               # Servicios de IA
│   ├── cloudinary/       # Cliente Cloudinary
│   └── supabase/         # Cliente Supabase
└── types/
    └── database.ts       # Tipos de DB

supabase/
├── migrations/           # Migraciones SQL
└── seed.sql              # Datos de prueba
```

### Frontend (Otro dev)
```
src/
├── app/
│   ├── (tenant)/[slug]/  # Páginas de menú
│   ├── admin/            # Panel admin (UI)
│   └── (auth)/           # Login/Signup
├── components/
│   ├── diner/            # Componentes de cliente
│   ├── admin/            # Componentes de admin
│   └── ui/               # Componentes base
└── hooks/                # Hooks personalizados
```

### Compartidos (Coordinar)
```
src/
├── types/index.ts        # Tipos compartidos
├── lib/constants.ts      # Constantes globales
└── middleware.ts         # Middleware Next.js

.env.local                # Variables de entorno
```

---

## 🌿 Estrategia de Branches (Git Flow)

```
main (producción)
  └── develop (desarrollo)
        ├── feature/backend-auth
        ├── feature/frontend-ui
        └── feature/integration-wompi
```

### Nomenclatura de Ramas

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Feature | `feature/descripcion` | `feature/backend-wompi` |
| Fix | `fix/descripcion` | `fix/auth-validation` |
| Refactor | `refactor/descripcion` | `refactor/api-structure` |

---

## 📋 Flujo de Trabajo Diario

### 1. Antes de Empezar
```bash
# Sincronizar con main
git checkout main
git pull origin main

# Crear rama para tu tarea
git checkout -b feature/mi-tarea
```

### 2. Durante el Desarrollo
```bash
# Hacer commits frecuentes y descriptivos
git add .
git commit -m "feat(backend): agregar endpoint de wompi"

# Sincronizar con main periódicamente
git fetch origin
git rebase origin/main
```

### 3. Al Terminar
```bash
# Push de la rama
git push origin feature/mi-tarea

# Crear Pull Request en GitHub
# Asignar reviewer (el otro dev)
```

---

## ⚠️ Antes de Cambios Estructurales

Para cambios como **Vite → Next.js**, **agregar librería mayor**, **cambiar arquitectura**:

### Checklist Pre-Cambio
- [ ] Avisar al otro dev por Slack/Discord
- [ ] Crear issue en GitHub describiendo el cambio
- [ ] El otro dev confirma que puede pausar sus cambios
- [ ] Crear rama `feature/cambio-estructural`
- [ ] Completar cambio y hacer PR
- [ ] El otro dev hace code review
- [ ] Merge a main
- [ ] El otro dev hace `git pull origin main`

---

## 🔧 Comandos Útiles

### Sincronizar y Continuar
```bash
# Si el otro dev hizo merge a main
git checkout main
git pull origin main
git checkout mi-rama
git rebase main

# Resolver conflictos si los hay
git add .
git rebase --continue
```

### Ver Cambios Recientes
```bash
# Ver qué cambió el otro dev
git log origin/main --oneline -10

# Ver diferencias con main
git diff main...mi-rama
```

### Deshacer Cambios Locales
```bash
# Deshacer cambios no commiteados
git checkout -- .

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1
```

---

## 📞 Comunicación

### Canales
- **Slack/Discord**: Para avisos rápidos y coordinación
- **GitHub Issues**: Para tareas y bugs
- **GitHub PRs**: Para code review

### Mensaje Tipo para Cambios Grandes
```
🚨 CAMBIO ESTRUCTURAL

Voy a realizar: [descripción del cambio]
Archivos afectados: [lista de archivos/directorios]
Tiempo estimado: [tiempo]

¿Pueden pausar sus cambios en [directorios] hasta que termine?
```

---

## ✅ Reglas de Oro

1. **Nunca hacer push directo a `main`** - Siempre usar PRs
2. **Commits pequeños y descriptivos** - Un cambio lógico por commit
3. **Sincronizar con main 2x al día** - Mañana y tarde
4. **Avisar antes de cambios estructurales** - Comunicación primero
5. **Code review obligatorio** - El otro dev debe aprobar PRs

---

## 📊 Estado Actual del Proyecto

| Área | Responsable | Estado |
|------|-------------|--------|
| Supabase (DB + Auth) | Backend | ✅ Completo |
| Cloudinary | Backend | ✅ Completo |
| OpenRouter (IA) | Backend | ⏳ Pendiente API Key |
| Wompi (Pagos) | Backend | ⏳ Pendiente |
| UI Componentes | Frontend | 🔄 En progreso |
| Páginas Tenant | Frontend | 🔄 En progreso |

---

*Documento creado: 2026-02-24*
*Última actualización: 2026-02-24*
