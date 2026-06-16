import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondo1 from '../assets/fondo1.png';

export default function Landing() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:'', lastname:'', email:'', phone:'', course:'', region:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      alert('Por favor ingresa tu nombre y correo.');
      return;
    }
    setSubmitted(true);
  };

  const goToApp = () => navigate('/admin/dashboard');

  return (
    <div style={{ background:'#0d0d0d', minHeight:'100vh', color:'#f0f0f0', fontFamily:'system-ui,-apple-system,sans-serif' }}>

      {/* NAV */}
      <nav style={{ background:'#0a0a0a', borderBottom:'1px solid #1a1a1a', padding:'0 2rem', display:'flex', alignItems:'center', justifyContent:'space-between', height:56 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, fontSize:15, fontWeight:700, color:'#fff' }}>
          <div style={{ width:32, height:32, background:'#E8650A', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <i className="ti ti-car" style={{ color:'#fff', fontSize:16 }} aria-hidden="true" />
          </div>
          V&G Capacitación automotriz
        </div>
        <div style={{ display:'flex', gap:'1.5rem' }}>
          {['Cursos','Niveles','¿Por qué nosotros?','Contacto'].map(l => (
            <span key={l} style={{ fontSize:13, color:'#666', cursor:'pointer' }}>{l}</span>
          ))}
        </div>
        <button onClick={goToApp} style={{ display:'flex', alignItems:'center', gap:8, padding:'7px 16px', border:'1px solid #E8650A', borderRadius:6, fontSize:13, color:'#E8650A', cursor:'pointer', background:'transparent', fontFamily:'inherit', transition:'all .15s' }}
          onMouseEnter={e => { e.currentTarget.style.background='#E8650A'; e.currentTarget.style.color='#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#E8650A'; }}
        >
          <i className="ti ti-lock" aria-hidden="true" /> Acceder al campus
        </button>
      </nav>

      {/* HERO */}
      <section style={{ 
  padding:'3rem 2rem 2.5rem', 
  borderBottom:'1px solid #1f1f1f', 
  position:'relative', 
  overflow:'hidden',
  backgroundImage:`url(${fondo1})`,
  backgroundSize:'cover',
  backgroundPosition:'center',
}}>
       <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.65)' }} />
  <div style={{ position:'absolute', top:0, left:0, width:4, height:'100%', background:'#E8650A' }} />
  <div style={{ position:'relative', zIndex:1, display:'grid', gridTemplateColumns:'1fr 340px', gap:'3rem', alignItems:'center', maxWidth:900, margin:'0 auto' }}>

          {/* LEFT */}
          <div>
            <div style={{ fontSize:11, letterSpacing:'.12em', color:'#E8650A', textTransform:'uppercase', marginBottom:14, display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:24, height:2, background:'#E8650A', display:'inline-block' }} />
              Capacitación técnica automotriz
            </div>
            <h1 style={{ fontSize:36, fontWeight:700, lineHeight:1.1, marginBottom:16, color:'#fff' }}>
              Domina la <span style={{ color:'#E8650A' }}>tecnología</span> que mueve al mundo
            </h1>
            <p style={{ fontSize:14, color:'#888', lineHeight:1.7, marginBottom:24, maxWidth:400 }}>
              Formación especializada en sistemas automotrices modernos. Desde diagnóstico electrónico hasta electromovilidad, aprende con instructores de taller.
            </p>
            <div style={{ display:'flex', gap:'2rem', marginBottom:28 }}>
              {[['2,400+','Técnicos formados'],['18','Módulos activos'],['96%','Satisfacción']].map(([val,label]) => (
                <div key={label}>
                  <div style={{ fontSize:22, fontWeight:700, color:'#E8650A' }}>{val}</div>
                  <div style={{ fontSize:11, color:'#555', marginTop:2 }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
              <a href="#cursos" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'12px 24px', background:'#E8650A', color:'#fff', border:'none', borderRadius:6, fontSize:14, fontWeight:600, cursor:'pointer', textDecoration:'none' }}>
                <i className="ti ti-player-play" aria-hidden="true" /> Ver cursos
              </a>
              <button onClick={goToApp} style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'12px 24px', background:'transparent', color:'#aaa', border:'1px solid #333', borderRadius:6, fontSize:14, cursor:'pointer', fontFamily:'inherit' }}>
                <i className="ti ti-login" aria-hidden="true" /> Ya tengo acceso
              </button>
            </div>
          </div>

          {/* FORM */}
          <div>
            {!submitted ? (
              <div style={{ background:'#161616', border:'1px solid #2a2a2a', borderRadius:12, padding:'1.5rem', borderTop:'3px solid #E8650A' }}>
                <div style={{ fontSize:14, fontWeight:600, color:'#fff', marginBottom:4 }}>Solicita información</div>
                <div style={{ fontSize:12, color:'#555', marginBottom:'1.25rem' }}>Nuestro equipo se contactará contigo</div>

                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:10 }}>
                  <input name="name"     placeholder="Nombres"    value={form.name}     onChange={handleChange} style={inputStyle} />
                  <input name="lastname" placeholder="Apellidos"  value={form.lastname} onChange={handleChange} style={inputStyle} />
                </div>
                <input name="email" placeholder="Correo electrónico" type="email" value={form.email} onChange={handleChange} style={{ ...inputStyle, width:'100%', marginBottom:10 }} />
                <input name="phone" placeholder="WhatsApp / Celular"  value={form.phone} onChange={handleChange} style={{ ...inputStyle, width:'100%', marginBottom:10 }} />
                <select name="course" value={form.course} onChange={handleChange} style={{ ...inputStyle, width:'100%', marginBottom:10 }}>
                  <option value="">Selecciona el curso de interés</option>
                  <option>Common Rail y Diesel moderno</option>
                  <option>Electromovilidad e híbridos</option>
                  <option>Diagnóstico electrónico</option>
                  <option>Estrategias de gasolina</option>
                  <option>Transmisiones automáticas</option>
                  <option>Aire acondicionado automotriz</option>
                </select>
                <select name="region" value={form.region} onChange={handleChange} style={{ ...inputStyle, width:'100%', marginBottom:14 }}>
                  <option value="">Región de residencia</option>
                  <option>Lima</option>
                  <option>Arequipa</option>
                  <option>Trujillo</option>
                  <option>Cusco</option>
                  <option>Otro</option>
                </select>
                <button onClick={handleSubmit} style={{ width:'100%', padding:11, background:'#E8650A', color:'#fff', border:'none', borderRadius:6, fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:'inherit', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                  Enviar solicitud <i className="ti ti-arrow-right" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <div style={{ background:'#161616', border:'1px solid #E8650A', borderRadius:12, padding:'2rem', textAlign:'center' }}>
                <i className="ti ti-circle-check" style={{ fontSize:40, color:'#E8650A', display:'block', marginBottom:12 }} aria-hidden="true" />
                <div style={{ fontSize:16, fontWeight:700, color:'#fff', marginBottom:6 }}>¡Solicitud enviada!</div>
                <div style={{ fontSize:13, color:'#666', marginBottom:'1.5rem' }}>Nos contactaremos contigo en menos de 24 horas.</div>
                <button onClick={goToApp} style={{ width:'100%', padding:11, background:'#E8650A', color:'#fff', border:'none', borderRadius:6, fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:'inherit', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                  <i className="ti ti-login" aria-hidden="true" /> Acceder al campus
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <div style={{ padding:'2.5rem 2rem', maxWidth:900, margin:'0 auto' }}>
        <div style={eyebrowStyle}>Por qué elegirnos</div>
        <h2 style={{ fontSize:22, fontWeight:700, color:'#fff', marginBottom:'1.5rem' }}>Aprende con quienes trabajan en el taller</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
          {whyItems.map((w,i) => (
            <div key={i} style={{ background:'#111', border:'1px solid #1f1f1f', borderRadius:8, padding:'1rem', textAlign:'center' }}>
              <i className={`ti ${w.icon}`} style={{ fontSize:24, color:'#E8650A', display:'block', marginBottom:8 }} aria-hidden="true" />
              <div style={{ fontSize:13, fontWeight:600, color:'#e0e0e0', marginBottom:4 }}>{w.title}</div>
              <div style={{ fontSize:11, color:'#444', lineHeight:1.5 }}>{w.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background:'#080808', borderTop:'1px solid #1a1a1a', padding:'1.5rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ fontSize:12, color:'#333' }}>© 2026 V&G Capacitación automotriz — Todos los derechos reservados</div>
        <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, fontWeight:700, color:'#fff' }}>
          <div style={{ width:24, height:24, background:'#E8650A', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <i className="ti ti-car" style={{ color:'#fff', fontSize:12 }} aria-hidden="true" />
          </div>
          V&G Capacitación automotriz
        </div>
      </footer>
    </div>
  );
}

const inputStyle = {
  padding:'9px 12px', background:'#0d0d0d', border:'1px solid #2a2a2a',
  borderRadius:6, color:'#f0f0f0', fontSize:13, fontFamily:'inherit', outline:'none',
};

const eyebrowStyle = {
  fontSize:11, letterSpacing:'.12em', color:'#E8650A', textTransform:'uppercase',
  marginBottom:8, display:'flex', alignItems:'center', gap:8,
};

const courses = [
  { name:'Fundamentos del motor de combustión', level:'Nivel básico',    levelColor:'#E8650A', icon:'ti-tool',          iconColor:'#E8650A', thumbBg:'#1a0e06', lessons:8,  duration:'4h 20m' },
  { name:'Estrategias de gasolina y sensores',  level:'Nivel básico',    levelColor:'#E8650A', icon:'ti-engine',        iconColor:'#E8650A', thumbBg:'#1a0e06', lessons:10, duration:'5h 10m' },
  { name:'Diagnóstico electrónico con escáner', level:'Nivel intermedio',levelColor:'#378ADD', icon:'ti-cpu',           iconColor:'#378ADD', thumbBg:'#0e0e12', lessons:12, duration:'6h 45m' },
  { name:'Common Rail y sistemas diesel',       level:'Nivel intermedio',levelColor:'#378ADD', icon:'ti-settings',      iconColor:'#378ADD', thumbBg:'#0e0e12', lessons:14, duration:'8h 00m' },
  { name:'Electromovilidad e híbridos HEV/PHEV',level:'Nivel avanzado',  levelColor:'#639922', icon:'ti-bolt',          iconColor:'#639922', thumbBg:'#061408', lessons:15, duration:'9h 10m' },
  { name:'Transmisiones automáticas y CVT',     level:'Nivel avanzado',  levelColor:'#639922', icon:'ti-circuit-board', iconColor:'#639922', thumbBg:'#061408', lessons:13, duration:'7h 30m' },
];

const whyItems = [
  { icon:'ti-video',         title:'Videos HD protegidos',      desc:'Contenido exclusivo con marca de agua. Sin descargas no autorizadas.' },
  { icon:'ti-device-mobile', title:'Accede desde cualquier lugar', desc:'PC, tablet o celular. Aprende en el taller o en casa.'            },
  { icon:'ti-file-text',     title:'Material descargable',      desc:'PDFs, esquemas y guías de diagnóstico por módulo.'                   },
  { icon:'ti-progress',      title:'Avance a tu ritmo',         desc:'El sistema guarda tu progreso. Pausa y retoma cuando quieras.'       },
];
