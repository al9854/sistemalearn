import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subscribers } from '../../data/mockData';
import Avatar from '../../components/shared/Avatar';
import Badge from '../../components/shared/Badge';
import ProgressBar from '../../components/shared/ProgressBar';

const statusVariant = { 'activo':'green', 'por vencer':'amber', 'vencido':'red' };

export default function Subscribers() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filtered = subscribers.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Suscriptores</h1>
        <p className="page-sub">Gestión de usuarios registrados en la plataforma</p>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem' }}>
        <input
          className="form-control"
          style={{ width:240 }}
          placeholder="Buscar suscriptor..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => navigate('/admin/nuevo')}>
          <i className="ti ti-user-plus" aria-hidden="true" /> Nuevo suscriptor
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Suscriptor</th>
              <th>Nivel</th>
              <th>Progreso</th>
              <th>Días restantes</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id}>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <Avatar initials={s.avatar} colorClass={s.avc} />
                    <div>
                      <div style={{ fontSize:13 }}>{s.name}</div>
                      <div style={{ fontSize:11, color:'var(--text-tertiary)' }}>{s.email}</div>
                    </div>
                  </div>
                </td>
                <td><Badge variant="blue">{s.level}</Badge></td>
                <td style={{ minWidth:120 }}>
                  <ProgressBar value={s.progress} showLabel />
                </td>
                <td>
                  {s.days === 0
                    ? <Badge variant="red">Vencido</Badge>
                    : <span style={{ color: s.days<=5 ? 'var(--color-warning)' : 'inherit', fontWeight: s.days<=5 ? 500 : 400 }}>
                        {s.days} días
                      </span>
                  }
                </td>
                <td><Badge variant={statusVariant[s.status]}>{s.status}</Badge></td>
                <td>
                  <div style={{ display:'flex', gap:6 }}>
                    <button className="btn btn-sm" title="Editar"><i className="ti ti-edit" aria-hidden="true" /></button>
                    <button className="btn btn-sm" title="Permisos" onClick={() => navigate('/admin/permisos')}><i className="ti ti-key" aria-hidden="true" /></button>
                    <button className="btn btn-sm btn-danger" title="Suspender"><i className="ti ti-user-off" aria-hidden="true" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
