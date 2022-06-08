<<<<<<< Updated upstream
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "../../components/form/form";
import API from "../../api";

import './add-event-page.css';
// import './signin.css';

export default function AddEventPage() {

  const [event, setEvent] = useState({
    name: "",
    description: "",
    startAt: "",
    finishAt: "",
    ifCoins: 0,
    requestStudentList: ""
  })

  function handleChange(e) {
    const value = e.target.value;
    
    setEvent({
      ...event,
      [e.target.name]: value
    });
      // request_list JSON.parse("[" + string + "]");
  }

//   function handleChangeSecond(e) {
//     const value = e.target.value;
//     setEvent({
//      ...event,
//       eventRequest: {
//         ...event.eventRequest,
//         [e.target.name]: value
//       },
//     });
//   }

  function submitData(evt){
    evt.preventDefault();
    API.post('api/event/requestaccount', event)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleCreateEvent = () => {
    const requestList = JSON.parse("[" + event.requestStudentList + "]")[0]
    console.log('o request list', requestList)
    setEvent({...event, requestStudentList: requestList});
    console.log('finalll aq antes de enviar', event)
    setTimeout(() => (API.post('api/user/event', event)
    .then((response) => {
      console.log(response.data)
    })
    .catch((response) => {
      console.log('erro', response)
    })), 5000)
    
  }

  console.log(event)


  return (
    <div className="add-event-container">
      <p>Criar evento</p>
      <div className="form-blocks">
        <div className="forms-block-1">
          <Form 
            handleChange={handleChange}
            type="text"
            name="name"
            label="Nome"
            value={event.name}
          />
          <Form 
            handleChange={handleChange}
            type="text"
            label="Descrição"
            name="description"
            value={event.description}
          />
          <Form 
            handleChange={handleChange}
            type="date"
            label="Início"
            name="startAt"
            value={event.startAt}
          />
=======
import React from 'react';

function AddEventPage() {
    return (
        <div>
            
>>>>>>> Stashed changes
        </div>
        <div className="forms-block-2">
          <Form 
            handleChange={handleChange}
            type="date"
            label="Final"
            name="finishAt"
            value={event.finishAt}
          />
          <Form 
            handleChange={handleChange}
            type="number"
            label="IFCOINS"
            name="ifCoins"
            value={event.ifCoins}
          />
          <Form 
            handleChange={handleChange}
            type="text"
            label="Convidados"
            name="requestStudentList"
            value={event.requestStudentList}
          />
        </div>
      </div>

      <button className='btn' onClick={handleCreateEvent}>ENVIAR</button>
      {/* <input type="submit" value="Enviar" /> */}
    </div>    
  );
}