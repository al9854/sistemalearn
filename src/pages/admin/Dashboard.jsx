import { subscribers, recentActivity } from '../../data/mockData';
import Avatar from '../../components/shared/Avatar';
import Badge from '../../components/shared/Badge';

export default function Dashboard() {
  const expiringSoon = subscribers.filter(s => s.days <= 7);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-sub">Resumen general de la plataforma</p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-label">Suscriptores activos</div>
          <div className="metric-value">38</div>
          <div className="metric-sub">+3 este mes</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Módulos publicados</div>
          <div className="metric-value">9</div>
          <div className="metric-sub">3 niveles</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Videos activos</div>
          <div className="metric-value">64</div>
          <div className="metric-sub">18.4 GB usados</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Vencen esta semana</div>
          <div className="metric-value" style={{ color:'var(--color-warning)' }}>5</div>
          <div className="metric-sub">Requieren renovación</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title">
            Suscriptores por vencer
            <Badge variant="amber">
              <i className="ti ti-alert-triangle" aria-hidden="true" /> {expiringSoon.length}
            </Badge>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Nivel</th>
                <th>Días restantes</th>
              </tr>
            </thead>
            <tbody>
              {expiringSoon.map(s => (
                <tr key={s.id} style={s.days <= 5 ? { background:'var(--color-warning-light)' } : {}}>
                  <td>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <Avatar initials={s.avatar} colorClass={s.avc} size="sm" />
                      {s.name}
                    </div>
                  </td>
                  <td><Badge variant="blue">{s.level}</Badge></td>
                  <td>
                    <strong style={{ color: s.days===0 ? 'var(--color-danger)' : s.days<=5 ? 'var(--color-warning)' : 'inherit' }}>
                      {s.days === 0 ? 'Vencido' : `${s.days} días`}
                    </strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-title">Actividad reciente</div>
          {recentActivity.map((a, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', borderBottom:'0.5px solid var(--border)' }}>
              <div style={{ width:32, height:32, borderRadius:'50%', background:'var(--bg-secondary)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <i className={`ti ${a.icon}`} style={{ fontSize:15, color:a.color }} aria-hidden="true" />
              </div>
              <div style={{ flex:1, fontSize:13 }}>{a.msg}</div>
              <div style={{ fontSize:11, color:'var(--text-tertiary)', whiteSpace:'nowrap' }}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
