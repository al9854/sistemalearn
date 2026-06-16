import { modules } from '../../data/mockData';
import Badge from '../../components/shared/Badge';

export default function Modules() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Módulos de aprendizaje</h1>
        <p className="page-sub">Organiza el contenido por módulos, secciones y lecciones</p>
      </div>

      <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:'1rem' }}>
        <button className="btn btn-primary">
          <i className="ti ti-plus" aria-hidden="true" /> Nuevo módulo
        </button>
      </div>

      {modules.map(m => (
        <div className="card" key={m.id} style={{ padding:0 }}>
          <div style={{ padding:'1rem 1.25rem', display:'flex', alignItems:'center', gap:14, borderBottom:'0.5px solid var(--border)' }}>
            <div className={`module-icon ${m.ic}`}>
              <i className={`ti ${m.icon}`} style={{ fontSize:20 }} aria-hidden="true" />
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, fontWeight:500 }}>{m.name}</div>
              <div style={{ fontSize:12, color:'var(--text-secondary)' }}>{m.lessons} lecciones · {m.duration}</div>
            </div>
            <Badge variant="blue">{m.level}</Badge>
            <Badge variant="green"><i className="ti ti-eye" aria-hidden="true" /> Publicado</Badge>
            <button className="btn btn-sm"><i className="ti ti-edit" aria-hidden="true" /></button>
            <button className="btn btn-sm btn-danger"><i className="ti ti-trash" aria-hidden="true" /></button>
          </div>

          <div style={{ padding:'10px 1.25rem' }}>
            <div style={{ fontSize:12, color:'var(--text-secondary)', marginBottom:6 }}>Lecciones</div>
            {m.lessonList.slice(0, 4).map(l => (
              <div key={l.id} style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 0', fontSize:13, borderBottom:'0.5px solid var(--border)' }}>
                <i className="ti ti-video" style={{ fontSize:14, color:'var(--text-tertiary)' }} aria-hidden="true" />
                <span style={{ flex:1 }}>{l.title}</span>
                <span style={{ fontSize:11, color:'var(--text-tertiary)' }}>{l.dur}</span>
                <button className="btn btn-sm" style={{ fontSize:11 }}>Editar</button>
              </div>
            ))}
            {m.lessonList.length > 4 && (
              <div style={{ fontSize:12, color:'var(--text-tertiary)', padding:'6px 0' }}>
                + {m.lessonList.length - 4} lecciones más...
              </div>
            )}
            <div style={{ paddingTop:8 }}>
              <button className="btn btn-sm">
                <i className="ti ti-plus" aria-hidden="true" /> Agregar lección
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
