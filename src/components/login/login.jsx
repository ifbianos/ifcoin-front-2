import React from 'react';
import Form from '../../components/form/form';

import { useUser } from '../../context/user-context';

import { useNavigate } from 'react-router-dom';


export default function Login() {
  const {
    user,
    setUser,
    handleChange,
    login,
  } = useUser();

  const navigate = useNavigate();

  function submitData(evt){
    evt.preventDefault();
    login(user);

    navigate('/');
  }

  return (
    <div className="signin-page">
      <div className="add-event-container add-signin-container">
        <p>Logar</p>
        <div className="form-blocks">
            <Form
              handleChange={handleChange}
              type="text"
              label="UserName"
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

        <button className='btn' onClick={submitData}>ENVIAR</button>
      </div>
      <div  className="screen-2"/>
    </div>
  );
}