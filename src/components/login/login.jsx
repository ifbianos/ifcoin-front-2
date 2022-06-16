import React from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/form/form';

import { useUser } from '../../context/user-context';

import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAnglesRight, faAnglesUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const {
    user,
    setUser,
    handleChange,
    make_login,
  } = useUser();

  function submitData(evt){
    evt.preventDefault();
    make_login(user);
  }

  const navigate = useNavigate();

  return (
      <div className="login-container">
        <p className='title'>Faça seu login</p>
        <div className="form-blocks-login">
            <Form
              handleChange={handleChange}
              type="text"
              label="Nome"
              name="username"
              value={user.username}
            />
            <Form
              handleChange={handleChange}
              type="text"
              label="Senha"
              name="password"
              value={user.password}
            />
        </div>

        <button className='btn-login' onClick={submitData}>ENTRAR</button>
        <div className='login-bottom'>
          <div className='login-recovery-pass-op'>
            <span>Esqueci minha senha</span>
            <FontAwesomeIcon icon={faAngleRight}/>
          </div>
          <div className='login-register-op' onClick={() => navigate('/cadastrar')}>
            <span>Ainda não tenho registro</span>
            <FontAwesomeIcon icon={faAngleRight}/>
          </div>
        </div>
      </div>
  );
}