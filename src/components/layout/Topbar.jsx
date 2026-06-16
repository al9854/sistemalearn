import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Avatar from '../shared/Avatar';
import { currentUser } from '../../data/mockData';

export default function Topbar() {
  const { role, switchToAdmin, switchToSubscriber } = useAuth();
  const navigate = useNavigate();

  const handleSwitch = (newRole) => {
    if (newRole === 'admin') {
      switchToAdmin();
      navigate('/admin/dashboard');
    } else {
      switchToSubscriber();
      navigate('/subscriber/inicio');
    }
  };

  return (
    <header className="topbar">
      <div className="topbar-brand">
        <div className="brand-icon">
          <i className="ti ti-school" aria-hidden="true" />
        </div>
        AcademiaPlus
      </div>

      <div className="role-switcher">
        <button
          className={`role-btn ${role === 'admin' ? 'active' : ''}`}
          onClick={() => handleSwitch('admin')}
        >
          <i className="ti ti-shield-check" aria-hidden="true" /> Admin
        </button>
        <button
          className={`role-btn ${role === 'subscriber' ? 'active' : ''}`}
          onClick={() => handleSwitch('subscriber')}
        >
          <i className="ti ti-user" aria-hidden="true" /> Suscriptor
        </button>
      </div>

      <div className="topbar-right">
        <div className="topbar-user">
          <Avatar
            initials={role === 'admin' ? 'MA' : currentUser.avatar}
            colorClass={role === 'admin' ? 'av-blue' : currentUser.avc}
            size="sm"
          />
          <span>{role === 'admin' ? 'María Admin' : currentUser.name}</span>
        </div>
      </div>
    </header>
  );
}
