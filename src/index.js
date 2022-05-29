import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import EventsPage from './pages/events-page/events-page';
import LoginPage from './pages/login-page/login-page';
import RegistrationManagePage from './pages/registration-manage-page/registration-manage-page';
import Signin from './signin/signin';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/entrar" element={<LoginPage />} />
      <Route path="/eventos" element={<EventsPage />} />
      <Route path="/cadastros_pendentes" element={<RegistrationManagePage />} />
      <Route path="/cadastrar" element={<Signin />} />
    </Routes>
  </BrowserRouter>
);
