export const subscribers = [
  { id:1, name:'Carlos Mendoza', email:'cmendoza@gmail.com', dni:'45123678', user:'cmendoza', level:'Avanzado', days:18, status:'activo',   progress:72, avatar:'CM', avc:'av-blue'   },
  { id:2, name:'Lucía Torres',   email:'ltorres@gmail.com',  dni:'48765432', user:'ltorres',  level:'Intermedio', days:4,  status:'por vencer', progress:45, avatar:'LT', avc:'av-teal'   },
  { id:3, name:'José Quispe',    email:'jquispe@gmail.com',  dni:'52341987', user:'jquispe',  level:'Básico',     days:30, status:'activo',   progress:20, avatar:'JQ', avc:'av-purple' },
  { id:4, name:'Ana Flores',     email:'aflores@gmail.com',  dni:'41234567', user:'aflores',  level:'Avanzado',   days:0,  status:'vencido',  progress:90, avatar:'AF', avc:'av-blue'   },
  { id:5, name:'Pedro Salas',    email:'psalas@gmail.com',   dni:'47891234', user:'psalas',   level:'Intermedio', days:12, status:'activo',   progress:58, avatar:'PS', avc:'av-teal'   },
];

export const modules = [
  {
    id:1, name:'Fundamentos de Excel', level:'Básico', lessons:8, duration:'4h 20min',
    icon:'ti-table', ic:'mi-blue', progress:100, published:true,
    lessonList:[
      { id:1, title:'Introducción a Excel',       type:'video', dur:'8:42',  done:true  },
      { id:2, title:'Interfaz y navegación',      type:'video', dur:'10:15', done:true  },
      { id:3, title:'Tipos de datos y formatos',  type:'video', dur:'12:00', done:true  },
      { id:4, title:'Fórmulas básicas',           type:'video', dur:'15:20', done:true  },
      { id:5, title:'Referencias de celda',       type:'video', dur:'11:40', done:true  },
      { id:6, title:'Funciones SUM, AVERAGE',     type:'video', dur:'13:10', done:true  },
      { id:7, title:'Gráficos simples',           type:'video', dur:'14:30', done:true  },
      { id:8, title:'Ejercicio integrador',       type:'video', dur:'18:00', done:true  },
    ],
    docs:[
      { id:1, name:'Guía de fórmulas Excel.pdf',  type:'PDF',   download:false },
      { id:2, name:'Atajos de teclado.pdf',        type:'PDF',   download:true  },
    ]
  },
  {
    id:2, name:'Excel Intermedio', level:'Intermedio', lessons:12, duration:'6h 45min',
    icon:'ti-chart-pie', ic:'mi-teal', progress:45, published:true,
    lessonList:[
      { id:1,  title:'Introducción a tablas dinámicas',      type:'video', dur:'12:15', done:true    },
      { id:2,  title:'Campos y valores',                     type:'video', dur:'15:40', done:true    },
      { id:3,  title:'Filtros y segmentadores',              type:'video', dur:'11:20', done:true    },
      { id:4,  title:'Gráficos dinámicos',                   type:'video', dur:'14:50', done:true    },
      { id:5,  title:'Fórmulas en tablas dinámicas',         type:'video', dur:'18:05', done:true    },
      { id:6,  title:'Actualización de datos',               type:'video', dur:'9:30',  done:true    },
      { id:7,  title:'Tablas dinámicas avanzadas',           type:'video', dur:'18:30', done:false, current:true },
      { id:8,  title:'Power Pivot básico',                   type:'video', dur:'22:10', done:false   },
      { id:9,  title:'Conexión a fuentes externas',          type:'video', dur:'19:45', done:false   },
      { id:10, title:'BUSCARV y BUSCARX',                    type:'video', dur:'16:20', done:false   },
      { id:11, title:'Funciones de texto y fecha',           type:'video', dur:'13:55', done:false   },
      { id:12, title:'Proyecto final',                       type:'video', dur:'25:00', done:false   },
    ],
    docs:[
      { id:1, name:'Ejercicios prácticos.xlsx', type:'Excel', download:true  },
      { id:2, name:'Apuntes del módulo.pdf',    type:'PDF',   download:false },
    ]
  },
  {
    id:3, name:'Power BI desde cero', level:'Avanzado', lessons:15, duration:'9h 10min',
    icon:'ti-chart-bar', ic:'mi-purple', progress:0, published:true,
    lessonList:[
      { id:1, title:'Introducción a Power BI', type:'video', dur:'14:00', done:false },
      { id:2, title:'Importar datos',          type:'video', dur:'18:30', done:false },
    ],
    docs:[
      { id:1, name:'Apuntes Power BI.pdf',     type:'PDF',        download:false },
      { id:2, name:'Plantilla dashboard.pptx', type:'PowerPoint', download:true  },
    ]
  },
];

export const recentActivity = [
  { icon:'ti-user-plus',  color:'#3B6D11', msg:'José Quispe registrado',                 time:'hace 2h'  },
  { icon:'ti-video',      color:'#185FA5', msg:'Video "Tablas dinámicas" subido',         time:'hace 4h'  },
  { icon:'ti-key',        color:'#854F0B', msg:'Permiso Avanzado asignado a C. Mendoza', time:'ayer'     },
  { icon:'ti-user-off',   color:'#A32D2D', msg:'Ana Flores — acceso vencido',            time:'ayer'     },
  { icon:'ti-file-text',  color:'#185FA5', msg:'Documento PDF subido al módulo Básico',  time:'hace 2d'  },
];

// Usuario logueado actualmente (simulado)
export const currentUser = {
  id: 1,
  name: 'Carlos Mendoza',
  email: 'cmendoza@gmail.com',
  avatar: 'CM',
  avc: 'av-blue',
  level: 'Avanzado',
  days: 18,
  expireDate: '04 de julio 2026',
  status: 'activo',
  enabledModules: [1, 2], // IDs de módulos habilitados
};
