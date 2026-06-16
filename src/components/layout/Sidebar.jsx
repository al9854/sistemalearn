import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const adminMenu = [
  { label: 'Principal', items: [
    { to: '/admin/dashboard',    icon: 'ti-dashboard',    text: 'Dashboard'         },
    { to: '/admin/suscriptores', icon: 'ti-users',        text: 'Suscriptores'      },
    { to: '/admin/nuevo',        icon: 'ti-user-plus',    text: 'Nuevo suscriptor'  },
  ]},
  { label: 'Contenido', items: [
    { to: '/admin/modulos',      icon: 'ti-layout-list',  text: 'Módulos'           },
    { to: '/admin/videos',       icon: 'ti-video',        text: 'Videos'            },
    { to: '/admin/documentos',   icon: 'ti-file-text',    text: 'Documentos'        },
  ]},
  { label: 'Sistema', items: [
    { to: '/admin/permisos',     icon: 'ti-key',          text: 'Permisos'          },
    { to: '/admin/reportes',     icon: 'ti-chart-bar',    text: 'Reportes'          },
  ]},
];

const subscriberMenu = [
  { label: 'Mi aprendizaje', items: [
    { to: '/subscriber/inicio',  icon: 'ti-home',         text: 'Inicio'            },
    { to: '/subscriber/curso',   icon: 'ti-player-play',  text: 'En curso'          },
    { to: '/subscriber/perfil',  icon: 'ti-user',         text: 'Mi perfil'         },
  ]},
];

export default function Sidebar() {
  const { role } = useAuth();
  const menu = role === 'admin' ? adminMenu : subscriberMenu;

  return (
    <nav className="sidebar" aria-label="Navegación principal">
      {menu.map(section => (
        <div key={section.label}>
          <div className="sidebar-section-label">{section.label}</div>
          {section.items.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
            >
              <i className={`ti ${item.icon}`} aria-hidden="true" />
              {item.text}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
}
