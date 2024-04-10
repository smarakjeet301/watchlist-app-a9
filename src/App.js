import { Routes, Route } from 'react-router-dom';
import './App.css';
import PageNotFound from './views/pages/404/PageNotFound';
import Dashboard from './views/pages/dashboard/Dashboard';
import Login from './views/pages/login/Login';
import Register from './views/pages/register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
