import { faCentSign, faFrancSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Login from '../../components/login/login';

import './login-page.css';

export default function LoginPage() {

  return (
    <div className='login-pg-container'>
      <div className='logo-lg'>
        <FontAwesomeIcon id='logo' icon={faFrancSign} />
        <FontAwesomeIcon id='logo' icon={faCentSign} />
      </div>
      <div className='login-ct'>
        <Login />
      </div>
    </div>
  )
}
