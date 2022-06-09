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
    requestStudentList: []
  });

  const [students, setStudents] = useState([
    {id: 1, name: 'tosta', checked: false},
    {id: 2, name: 'rafael', checked: false}
  ]);

  function handleChange(e) {
    const value = e.target.value;
    
    setEvent({
      ...event,
      [e.target.name]: value
    });
      // request_list JSON.parse("[" + string + "]");
  }

  // const handleRequestList = (id) => {
  //   setEvent({...event, requestStudentList: event.requestStudentList.push(id)})
  // }

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
    API.post('api/user/event', event)
    .then((response) => {
      console.log(response.data)
    })
    .catch((response) => {
      console.log('erro', response)
    })
  }


  const updateFieldChanged = index => e => {
    let newArr = [...students];
    newArr[index].checked = !newArr[index].checked;
  
    setStudents(newArr);
    setEvent({...event, requestStudentList: students.map((student, index) => {
      if(student.checked) return student.id
    })})

  }

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
          <p>Convidados</p>          
          {students.map((student, index) => {
              return (
                <div>
                  <input checked={student.checked} onChange={updateFieldChanged(index)} value={student.id} type="checkbox"/>
                  <label for="html">{student.name}</label>
                </div>
              );
            })
          }
        </div>
      </div>

      <button className='btn' onClick={handleCreateEvent}>ENVIAR</button>
      {/* <input type="submit" value="Enviar" /> */}
    </div>    
  );
}