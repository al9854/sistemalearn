# AcademiaPlus — LMS Frontend

Frontend del sistema de gestión de aprendizaje por niveles.  
Construido con **React 18 + Vite + React Router v6**.

---

## 🚀 Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar en modo desarrollo
npm run dev

# 3. Build para producción
npm run build
```

---

## 🗂️ Estructura del proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Topbar.jsx          # Barra superior con switch de roles
│   │   └── Sidebar.jsx         # Menú lateral (cambia según rol)
│   └── shared/
│       ├── Avatar.jsx           # Componente de avatar con iniciales
│       ├── Badge.jsx            # Badges de estado y nivel
│       └── ProgressBar.jsx      # Barra de progreso reutilizable
├── context/
│   └── AuthContext.jsx          # Contexto global de rol (admin/suscriptor)
├── data/
│   └── mockData.js             # Datos de demo (reemplazar con API)
├── pages/
│   ├── admin/
│   │   ├── Dashboard.jsx        # Vista principal del admin
│   │   ├── Subscribers.jsx      # Lista y gestión de suscriptores
│   │   ├── NewSubscriber.jsx    # Formulario de nuevo suscriptor
│   │   ├── Modules.jsx          # Gestión de módulos y lecciones
│   │   ├── Videos.jsx           # Subida y gestión de videos
│   │   └── AdminExtra.jsx       # Documentos, Permisos, Reportes
│   └── subscriber/
│       └── SubscriberPages.jsx  # Inicio, Curso (player), Perfil
├── App.jsx                      # Router principal
├── main.jsx                     # Entry point
└── index.css                    # Sistema de diseño completo
```

---

## 🔀 Roles del sistema

| Rol | Ruta base | Acceso |
|-----|-----------|--------|
| Admin | `/admin/*` | Dashboard, suscriptores, contenido, permisos |
| Suscriptor | `/subscriber/*` | Inicio, reproductor, perfil |

Usar el switch **Admin / Suscriptor** en la barra superior para cambiar de vista.

---

## 🔌 Integración con backend

Los datos de demo están en `src/data/mockData.js`.  
Para conectar al backend real, reemplaza las importaciones de `mockData`  
por llamadas `fetch` o `axios` a tu API REST.

**Ejemplo:**
```js
// Antes (mock)
import { subscribers } from '../../data/mockData';

// Después (API real)
const [subscribers, setSubscribers] = useState([]);
useEffect(() => {
  fetch('/api/subscribers').then(r => r.json()).then(setSubscribers);
}, []);
```

---

## 📦 Dependencias

| Paquete | Versión | Para qué |
|---------|---------|----------|
| react | ^18.3 | Framework UI |
| react-dom | ^18.3 | Renderizado DOM |
| react-router-dom | ^6.26 | Navegación entre páginas |
| vite | ^5.4 | Bundler y dev server |

Iconos: **Tabler Icons** (cargado via CDN en `index.html`, sin dependencia npm)

---

## 🚀 Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

O conectar el repositorio GitHub directamente desde vercel.com.
