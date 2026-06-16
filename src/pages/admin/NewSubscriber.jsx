import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function generateCredentials(name) {
  const base = name.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
  const user = base + Math.floor(Math.random() * 99);
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789#@!';
  const pass  = Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return { user, pass };
}

export default function NewSubscriber() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ names:'', lastnames:'', email:'', dni:'', level:'Básico', days:'30' });
  const [creds, setCreds] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleChange = e => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (updated.names) setCreds(generateCredentials(updated.names));
    else setCreds(null);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => navigate('/admin/suscriptores'), 1500);
  };

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Nuevo suscriptor</h1>
        <p className="page-sub">Registra los datos y genera las credenciales de acceso</p>
      </div>

      {saved && (
        <div className="alert alert-success" style={{ marginBottom:'1rem' }}>
          <i className="ti ti-circle-check" aria-hidden="true" />
          Suscriptor registrado. Credenciales enviadas al correo. Redirigiendo...
        </div>
      )}

      <div className="card" style={{ maxWidth:580 }}>
        <div className="tab-bar">
          <div className="tab active">Datos personales</div>
          <div className="tab">Acceso y permisos</div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Nombres</label>
            <input className="form-control" name="names" placeholder="Ej: Carlos" value={form.names} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Apellidos</label>
            <input className="form-control" name="lastnames" placeholder="Ej: Mendoza Ríos" value={form.lastnames} onChange={handleChange} />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input className="form-control" name="email" type="email" placeholder="correo@email.com" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">DNI / Identificador</label>
            <input className="form-control" name="dni" placeholder="00000000" value={form.dni} onChange={handleChange} />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Nivel de acceso</label>
            <select className="form-control" name="level" value={form.level} onChange={handleChange}>
              <option>Básico</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Días de acceso</label>
            <select className="form-control" name="days" value={form.days} onChange={handleChange}>
              <option value="30">30 días</option>
              <option value="60">60 días</option>
              <option value="90">90 días</option>
              <option value="180">180 días</option>
            </select>
          </div>
        </div>

        <div className="divider" />

        {creds ? (
          <div style={{ background:'var(--bg-secondary)', borderRadius:'var(--radius-md)', padding:'12px 14px', marginBottom:'1rem' }}>
            <div style={{ fontSize:12, color:'var(--text-secondary)', marginBottom:6 }}>
              <i className="ti ti-key" aria-hidden="true" /> Credenciales generadas automáticamente
            </div>
            <div style={{ display:'flex', gap:24, fontSize:13 }}>
              <span>Usuario: <strong>{creds.user}</strong></span>
              <span>Contraseña: <strong>{creds.pass}</strong></span>
            </div>
            <div style={{ fontSize:11, color:'var(--text-tertiary)', marginTop:4 }}>
              Se enviará al correo del suscriptor al guardar
            </div>
          </div>
        ) : (
          <div className="alert alert-info" style={{ marginBottom:'1rem' }}>
            <i className="ti ti-info-circle" aria-hidden="true" />
            Ingresa el nombre para generar las credenciales automáticamente
          </div>
        )}

        <div style={{ display:'flex', gap:8, justifyContent:'flex-end' }}>
          <button className="btn" onClick={() => navigate('/admin/suscriptores')}>Cancelar</button>
          <button className="btn btn-primary" onClick={handleSave} disabled={!form.names || !form.email}>
            <i className="ti ti-device-floppy" aria-hidden="true" /> Guardar y enviar credenciales
          </button>
        </div>
      </div>
    </>
  );
}
