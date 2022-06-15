import React from 'react';
import { useState } from "react";
import axios from "axios";
import './signin.css';
import Form from "../components/form/form";
import API from "../api";

export default function Signin() {

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    cpf: "",
    role: "",
    userRequestDto: {
        username: "",
        password: ""
    }
  })

  function handleChange(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    });
  }

  function handleChangeSecond(e) {
    const value = e.target.value;
    setUser({
     ...user,
      userRequestDto: {
        ...user.userRequestDto,
        [e.target.name]: value
      },
    });
  }

  function submitData(evt){
    evt.preventDefault();
    API.post('/api/user/requestaccount',
      user
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="signin-page">
      <div className="add-event-container add-signin-container">
        <p>Requisitar conta</p>
        <div className="form-blocks">
          <div className="forms-block-1">
            <Form 
              handleChange={handleChange}
              type="text"
              name="name"
              label="Nome"
              value={user.name}
            />
            <Form 
              handleChange={handleChange}
              type="text"
              label="Sobrenome"
              name="lastName"
              value={user.lastName}
            />
            <Form 
              handleChange={handleChange}
              type="text"
              label="CPF"
              name="cpf"
              value={user.cpf}
            />
          </div>
          <div className="forms-block-2">
            <Form 
              handleChange={handleChange}
              type="text"
              label="Categoria"
              name="role"
              value={user.role}
            />
            <Form 
              handleChange={handleChangeSecond}
              type="text"
              label="UserName"
              name="username"
              value={user.userRequestDto.username}
            />
            <Form 
              handleChange={handleChangeSecond}
              type="text"
              label="Senha"
              name="password"
              value={user.userRequestDto.password}
            />
          </div>
        </div>

        <button className='btn' onClick={submitData}>ENVIAR</button>
      </div>
      <div  className="screen-2"/>
    </div>    
  );
}