import Badge from '../../components/shared/Badge';

const videos = [
  { id:1, name:'Introducción a Excel',       module:'Fundamentos de Excel', level:'Básico',     dur:'8:42',  status:'publicado' },
  { id:2, name:'Fórmulas básicas',           module:'Fundamentos de Excel', level:'Básico',     dur:'12:15', status:'publicado' },
  { id:3, name:'Tablas dinámicas',           module:'Excel Intermedio',     level:'Intermedio', dur:'18:30', status:'publicado' },
  { id:4, name:'Power Query básico',         module:'Excel Intermedio',     level:'Intermedio', dur:'22:10', status:'borrador'  },
  { id:5, name:'Dashboard en Power BI',      module:'Power BI desde cero',  level:'Avanzado',   dur:'31:05', status:'publicado' },
];

export default function Videos() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Videos</h1>
        <p className="page-sub">Gestión de videos subidos a la plataforma</p>
      </div>

      <div className="upload-zone">
        <i className="ti ti-cloud-upload" style={{ fontSize:32, color:'var(--text-tertiary)', display:'block', marginBottom:8 }} aria-hidden="true" />
        <div style={{ fontSize:14, color:'var(--text-secondary)', marginBottom:4 }}>Arrastra tu video MP4 aquí</div>
        <div style={{ fontSize:12, color:'var(--text-tertiary)', marginBottom:12 }}>o haz clic para seleccionar · Máx. 2 GB por archivo</div>
        <button className="btn btn-primary">
          <i className="ti ti-upload" aria-hidden="true" /> Seleccionar archivo
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Video</th>
              <th>Módulo</th>
              <th>Nivel</th>
              <th>Duración</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {videos.map(v => (
              <tr key={v.id}>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:38, height:26, background:'#0a0a0a', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <i className="ti ti-player-play" style={{ fontSize:12, color:'rgba(255,255,255,.5)' }} aria-hidden="true" />
                    </div>
                    <span>{v.name}</span>
                  </div>
                </td>
                <td style={{ fontSize:12, color:'var(--text-secondary)' }}>{v.module}</td>
                <td><Badge variant="blue">{v.level}</Badge></td>
                <td>{v.dur}</td>
                <td><Badge variant={v.status === 'publicado' ? 'green' : 'gray'}>{v.status}</Badge></td>
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
