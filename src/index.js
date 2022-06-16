import ReactDOM from 'react-dom/client';
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import EventsPage from './pages/events-page/events-page';
import LoginPage from './pages/login-page/login-page';
import './app.css';
import RegistrationManagePage from './pages/registration-manage-page/registration-manage-page';
import Signin from './signin/signin';
import AddEventPage from './pages/add-event-page/add-event-page';
import { UserProvider } from './context/user-context';
import HomePage from './pages/home-page/home-page';
import { SideBarProvider } from './context/side-bar-context';

const isLogged = () => {
  const loggedUser = sessionStorage.getItem("user");

  if (loggedUser) {
    return true
  }

  return false
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/entrar" element={
        < UserProvider>
          { isLogged() ? <HomePage /> : <LoginPage /> }
        </UserProvider>
      } />
      <Route path="/eventos" element={
        < UserProvider>
          <SideBarProvider>
            <EventsPage />
          </SideBarProvider>
        </UserProvider>}
      />
      <Route path="/cadastros_pendentes" element={<RegistrationManagePage />} />
      <Route path="/cadastrar" element={<Signin />} />
      <Route path="/criar_evento" element={<AddEventPage />} />
    </Routes>
  </BrowserRouter>
);
