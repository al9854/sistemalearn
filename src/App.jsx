import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Topbar from './components/layout/Topbar';
import Sidebar from './components/layout/Sidebar';
import Landing from './pages/Landing';
import Dashboard     from './pages/admin/Dashboard';
import Subscribers   from './pages/admin/Subscribers';
import NewSubscriber from './pages/admin/NewSubscriber';
import Modules       from './pages/admin/Modules';
import Videos        from './pages/admin/Videos';
import { Documents, Permissions, Reports } from './pages/admin/AdminExtra';
import { SubHome, SubCourse, SubProfile } from './pages/subscriber/SubscriberPages';

function AppLayout() {
  return (
    <div className="app">
      <Topbar />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/admin/dashboard"    element={<Dashboard />} />
            <Route path="/admin/suscriptores" element={<Subscribers />} />
            <Route path="/admin/nuevo"        element={<NewSubscriber />} />
            <Route path="/admin/modulos"      element={<Modules />} />
            <Route path="/admin/videos"       element={<Videos />} />
            <Route path="/admin/documentos"   element={<Documents />} />
            <Route path="/admin/permisos"     element={<Permissions />} />
            <Route path="/admin/reportes"     element={<Reports />} />
            <Route path="/subscriber/inicio"  element={<SubHome />} />
            <Route path="/subscriber/curso"   element={<SubCourse />} />
            <Route path="/subscriber/perfil"  element={<SubProfile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/sistemalearn">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/*" element={<AppLayout />} />
          <Route path="/subscriber/*" element={<AppLayout />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}