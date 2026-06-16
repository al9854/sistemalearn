import { useNavigate } from 'react-router-dom';
import { modules, currentUser } from '../../data/mockData';
import Badge from '../../components/shared/Badge';
import Avatar from '../../components/shared/Avatar';
import ProgressBar from '../../components/shared/ProgressBar';

// ── SUBSCRIBER HOME ─────────────────────────────────────
export function SubHome() {
  const navigate = useNavigate();
  const enabledModules = modules.filter(m => currentUser.enabledModules.includes(m.id));
  const lockedModules  = modules.filter(m => !currentUser.enabledModules.includes(m.id));

  return (
    <>
      <div className="page-header" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div>
          <h1 className="page-title">Bienvenido, {currentUser.name.split(' ')[0]}</h1>
          <p className="page-sub">Continúa donde lo dejaste</p>
        </div>
      </div>

      <div className="alert alert-warning">
        <i className="ti ti-clock" aria-hidden="true" />
        Tu acceso vence en <strong style={{ marginLeft:4 }}>{currentUser.days} días</strong>.
        Contacta al administrador para renovar.
      </div>

      <div className="metrics-grid metrics-grid-2" style={{ marginBottom:'1.5rem' }}>
        <div className="metric-card"><div className="metric-label">Módulos habilitados</div><div className="metric-value">{enabledModules.length}</div></div>
        <div className="metric-card"><div className="metric-label">Lecciones completadas</div><div className="metric-value">14</div></div>
        <div className="metric-card"><div className="metric-label">Progreso general</div><div className="metric-value">58%</div></div>
        <div className="metric-card"><div className="metric-label">Nivel</div><div className="metric-value" style={{ fontSize:16 }}>{currentUser.level}</div></div>
      </div>

      <div style={{ fontSize:14, fontWeight:500, marginBottom:12 }}>Mis módulos</div>

      {enabledModules.map(m => (
        <div key={m.id} className="module-card" onClick={() => navigate('/subscriber/curso')}>
          <div className={`module-icon ${m.ic}`}>
            <i className={`ti ${m.icon}`} aria-hidden="true" />
          </div>
          <div className="module-info" style={{ flex:1 }}>
            <div className="module-name">{m.name}</div>
            <div className="module-meta" style={{ marginBottom:8 }}>
              <Badge variant="blue">{m.level}</Badge>
              <span style={{ marginLeft:8, color:'var(--text-secondary)', fontSize:12 }}>{m.lessons} lecciones · {m.duration}</span>
            </div>
            <ProgressBar value={m.progress} />
            <div style={{ fontSize:11, color:'var(--text-tertiary)', marginTop:4 }}>{m.progress}% completado</div>
          </div>
          <i className="ti ti-chevron-right" style={{ color:'var(--text-tertiary)', marginTop:4 }} aria-hidden="true" />
        </div>
      ))}

      {lockedModules.map(m => (
        <div key={m.id} className="module-card locked">
          <div className="module-icon mi-purple">
            <i className="ti ti-lock" aria-hidden="true" />
          </div>
          <div style={{ flex:1 }}>
            <div className="module-name">{m.name}</div>
            <div><Badge variant="gray">No habilitado</Badge></div>
          </div>
        </div>
      ))}
    </>
  );
}

// ── SUBSCRIBER COURSE PLAYER ────────────────────────────
export function SubCourse() {
  const mod = modules[1]; // Excel Intermedio

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">{mod.name}</h1>
        <p className="page-sub">Continúa tu aprendizaje</p>
      </div>

      <div className="player-wrap">
        <button className="play-btn" aria-label="Reproducir video">
          <i className="ti ti-player-play" aria-hidden="true" />
        </button>
        <div className="player-watermark">{currentUser.email}</div>
        <div className="player-progressbar"><div className="player-prog" /></div>
      </div>

      <div className="card" style={{ marginBottom:'1rem' }}>
        <div style={{ fontSize:14, fontWeight:500, marginBottom:2 }}>Tablas dinámicas avanzadas</div>
        <div style={{ fontSize:12, color:'var(--text-secondary)' }}>Lección 7 de {mod.lessons} · 18:30 min</div>
      </div>

      <div style={{ fontSize:13, fontWeight:500, marginBottom:10, color:'var(--text-secondary)' }}>
        Contenido del módulo
      </div>

      <ul className="lesson-list">
        {mod.lessonList.map(l => (
          <li key={l.id} className={`lesson-item ${l.done ? 'done' : ''} ${l.current ? 'current' : ''}`}>
            <i className={`ti ${l.done ? 'ti-circle-check' : l.current ? 'ti-player-play' : 'ti-circle'}`} aria-hidden="true" />
            <span style={{ flex:1 }}>{l.title}</span>
            <span className="lesson-dur">{l.dur}</span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop:'1.5rem', fontSize:13, fontWeight:500, color:'var(--text-secondary)', marginBottom:8 }}>
        Documentos del módulo
      </div>

      {mod.docs.map(d => (
        <div key={d.id} style={{ display:'flex', alignItems:'center', gap:10, padding:10, background:'var(--bg-secondary)', borderRadius:'var(--radius-md)', marginBottom:6 }}>
          <i
            className={`ti ${d.type==='Excel' ? 'ti-table' : 'ti-file-text'}`}
            style={{ fontSize:18, color: d.type==='Excel' ? 'var(--color-success)' : 'var(--color-primary)' }}
            aria-hidden="true"
          />
          <span style={{ flex:1, fontSize:13 }}>{d.name}</span>
          {d.download
            ? <button className="btn btn-primary btn-sm"><i className="ti ti-download" aria-hidden="true" /> Descargar</button>
            : <button className="btn btn-sm"><i className="ti ti-eye" aria-hidden="true" /> Ver en línea</button>
          }
        </div>
      ))}
    </>
  );
}

// ── SUBSCRIBER PROFILE ──────────────────────────────────
export function SubProfile() {
  const enabledModules = modules.filter(m => currentUser.enabledModules.includes(m.id));

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Mi perfil</h1>
        <p className="page-sub">Información de tu cuenta</p>
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:14, padding:'1rem 1.25rem', background:'var(--bg-primary)', border:'0.5px solid var(--border)', borderRadius:'var(--radius-lg)', marginBottom:'1rem' }}>
        <Avatar initials={currentUser.avatar} colorClass={currentUser.avc} size="lg" />
        <div>
          <div style={{ fontSize:15, fontWeight:500 }}>{currentUser.name}</div>
          <div style={{ fontSize:13, color:'var(--text-secondary)' }}>{currentUser.email}</div>
          <div style={{ marginTop:6, display:'flex', gap:6 }}>
            <Badge variant="blue">{currentUser.level}</Badge>
            <Badge variant="green"><i className="ti ti-circle-check" aria-hidden="true" /> Activo</Badge>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title">Estado de acceso</div>
          {[
            ['Usuario', currentUser.email.split('@')[0]],
            ['Vence el', currentUser.expireDate],
            ['Días restantes', `${currentUser.days} días`],
            ['Nivel', currentUser.level],
          ].map(([label, val], i) => (
            <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'0.5px solid var(--border)', fontSize:13 }}>
              <span style={{ color:'var(--text-secondary)' }}>{label}</span>
              <strong style={{ color: label==='Días restantes' ? 'var(--color-warning)' : 'inherit' }}>{val}</strong>
            </div>
          ))}
          <div className="alert alert-warning" style={{ marginTop:'1rem' }}>
            <i className="ti ti-alert-triangle" aria-hidden="true" />
            Comunícate con nosotros para renovar tu acceso.
          </div>
        </div>

        <div className="card">
          <div className="card-title">Mi progreso</div>
          {enabledModules.map(m => (
            <div key={m.id} style={{ marginBottom:14 }}>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:13, marginBottom:5 }}>
                <span>{m.name}</span>
                <span style={{ color:'var(--text-secondary)' }}>{m.progress}%</span>
              </div>
              <ProgressBar value={m.progress} />
            </div>
          ))}
          {modules.filter(m => !currentUser.enabledModules.includes(m.id)).map(m => (
            <div key={m.id} style={{ marginBottom:14, opacity:0.4 }}>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:13, marginBottom:5 }}>
                <span>{m.name}</span>
                <span style={{ color:'var(--text-secondary)' }}>bloqueado</span>
              </div>
              <ProgressBar value={0} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
