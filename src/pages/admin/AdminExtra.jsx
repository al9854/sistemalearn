import { useState } from 'react';
import { modules, subscribers } from '../../data/mockData';
import Badge from '../../components/shared/Badge';
import Avatar from '../../components/shared/Avatar';
import ProgressBar from '../../components/shared/ProgressBar';

// ── DOCUMENTS ──────────────────────────────────────────
const docs = [
  { id:1, name:'Guía de fórmulas Excel.pdf', type:'PDF',        module:'Fundamentos de Excel', download:false },
  { id:2, name:'Ejercicios prácticos.xlsx',  type:'Excel',      module:'Excel Intermedio',     download:true  },
  { id:3, name:'Apuntes Power BI.pdf',       type:'PDF',        module:'Power BI desde cero',  download:false },
  { id:4, name:'Plantilla dashboard.pptx',   type:'PowerPoint', module:'Power BI desde cero',  download:true  },
];

const typeIcon  = { PDF:'ti-file-text', Excel:'ti-table', PowerPoint:'ti-presentation' };
const typeColor = { PDF:'var(--color-danger)', Excel:'var(--color-success)', PowerPoint:'var(--color-primary)' };

export function Documents() {
  const [list, setList] = useState(docs);

  const toggle = id => setList(prev => prev.map(d => d.id === id ? { ...d, download:!d.download } : d));

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Documentos</h1>
        <p className="page-sub">Archivos PDF, Word y Excel disponibles en los módulos</p>
      </div>
      <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:'1rem' }}>
        <button className="btn btn-primary"><i className="ti ti-upload" aria-hidden="true" /> Subir documento</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Archivo</th><th>Tipo</th><th>Módulo</th><th>Descarga</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {list.map(d => (
              <tr key={d.id}>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <i className={`ti ${typeIcon[d.type]}`} style={{ fontSize:18, color:typeColor[d.type] }} aria-hidden="true" />
                    {d.name}
                  </div>
                </td>
                <td><Badge variant="gray">{d.type}</Badge></td>
                <td style={{ fontSize:12, color:'var(--text-secondary)' }}>{d.module}</td>
                <td>
                  <div className="toggle-wrap">
                    <div className={`toggle ${d.download ? 'on' : ''}`} onClick={() => toggle(d.id)} role="switch" aria-checked={d.download}>
                      <div className="toggle-knob" />
                    </div>
                    <span className="toggle-label">{d.download ? 'permitida' : 'bloqueada'}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display:'flex', gap:6 }}>
                    <button className="btn btn-sm"><i className="ti ti-edit" aria-hidden="true" /></button>
                    <button className="btn btn-sm btn-danger"><i className="ti ti-trash" aria-hidden="true" /></button>
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

// ── PERMISSIONS ────────────────────────────────────────
export function Permissions() {
  const sub = subscribers[0];
  const [enabled, setEnabled] = useState([1, 2]);

  const toggle = id => setEnabled(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Permisos</h1>
        <p className="page-sub">Asigna módulos específicos a cada suscriptor</p>
      </div>
      <div className="card" style={{ maxWidth:600 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:'1rem', paddingBottom:'1rem', borderBottom:'0.5px solid var(--border)' }}>
          <Avatar initials={sub.avatar} colorClass={sub.avc} size="lg" />
          <div>
            <div style={{ fontWeight:500 }}>{sub.name}</div>
            <div style={{ fontSize:12, color:'var(--text-secondary)' }}>{sub.email}</div>
            <div style={{ marginTop:4 }}><Badge variant="blue">{sub.level}</Badge></div>
          </div>
        </div>

        <div style={{ fontSize:13, color:'var(--text-secondary)', marginBottom:'1rem' }}>
          Módulos habilitados para este suscriptor
        </div>

        {modules.map(m => {
          const isOn = enabled.includes(m.id);
          return (
            <div key={m.id} style={{ display:'flex', alignItems:'center', gap:14, padding:'12px 0', borderBottom:'0.5px solid var(--border)' }}>
              <div className={`module-icon ${m.ic}`} style={{ width:36, height:36 }}>
                <i className={`ti ${m.icon}`} style={{ fontSize:16 }} aria-hidden="true" />
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:500 }}>{m.name}</div>
                <div style={{ fontSize:11, color:'var(--text-secondary)' }}>{m.level} · {m.lessons} lecciones</div>
              </div>
              <div className="toggle-wrap">
                <div className={`toggle ${isOn ? 'on' : ''}`} onClick={() => toggle(m.id)} role="switch" aria-checked={isOn}>
                  <div className="toggle-knob" />
                </div>
                <span className="toggle-label" style={{ color: isOn ? 'var(--color-primary)' : 'var(--text-tertiary)' }}>
                  {isOn ? 'habilitado' : 'deshabilitado'}
                </span>
              </div>
            </div>
          );
        })}

        <div style={{ display:'flex', justifyContent:'flex-end', marginTop:'1rem' }}>
          <button className="btn btn-primary">
            <i className="ti ti-device-floppy" aria-hidden="true" /> Guardar permisos
          </button>
        </div>
      </div>
    </>
  );
}

// ── REPORTS ────────────────────────────────────────────
export function Reports() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Reportes</h1>
        <p className="page-sub">Progreso y actividad de los suscriptores</p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card"><div className="metric-label">Lecciones completadas hoy</div><div className="metric-value">12</div></div>
        <div className="metric-card"><div className="metric-label">Tiempo promedio por sesión</div><div className="metric-value">24 min</div></div>
        <div className="metric-card"><div className="metric-label">Suscriptores activos hoy</div><div className="metric-value">38</div></div>
        <div className="metric-card"><div className="metric-label">Módulos completados esta semana</div><div className="metric-value">7</div></div>
      </div>

      <div className="card">
        <div className="card-title">Progreso por suscriptor</div>
        <table>
          <thead>
            <tr><th>Suscriptor</th><th>Módulo activo</th><th>Progreso</th><th>Última conexión</th></tr>
          </thead>
          <tbody>
            {subscribers.map(s => (
              <tr key={s.id}>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <Avatar initials={s.avatar} colorClass={s.avc} size="sm" />
                    {s.name}
                  </div>
                </td>
                <td style={{ fontSize:12, color:'var(--text-secondary)' }}>Excel Intermedio</td>
                <td style={{ minWidth:140 }}><ProgressBar value={s.progress} showLabel /></td>
                <td style={{ fontSize:12, color:'var(--text-tertiary)' }}>hace {Math.floor(Math.random()*5)+1}h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
