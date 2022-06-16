import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "../../components/form/form";
import API from "../../api";

import './add-event-page.css';

export default function AddEventPage() {

  const [event, setEvent] = useState({
    name: "",
    description: "",
    startAt: "",
    finishAt: "",
    ifCoins: 0,
    requestStudentList: []
  });

  const [searchValue, setSearchValue] = useState('');
  const [searchedStudents, setSearchedStudents] = useState([]);

  const [students, setStudents] = useState([])

  function handleChange(e) {
    const value = e.target.value;

    setEvent({
      ...event,
      [e.target.name]: value
    });
  }

  function handleChangeSearch(e) {
    const value = e.target.value;

    setSearchValue(value);
    getStudents(value);
  }

  // console.log(searchedStudents)
  const getStudents = (input) => {
    API.get(`api/user/student?containing=${input}`).then((response) => {
      if (response.data) setSearchedStudents(response.data.map((data, index) => {
        return {...data, checked: false}
      }))
      else setSearchedStudents([])
    });
  }
  // console.log({searchedStudents})
  function submitData(evt){
    evt.preventDefault();
    API.post('api/event/requestaccount', event)
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleCreateEvent = () => {
    API.post('api/user/event', event)
    .then((response) => {
      // console.log(response.data)
    })
    .catch((response) => {
      console.log('erro', response)
    })
  }

  const handleDeleteStudent = index => e => {
    let newArr = [...students];
    console.log('new arr antes', newArr)
    newArr.splice(index, 1)
    console.log('new arr dps', newArr)
    //TODO: quando remove daq tem q colocar o checked no search student como false
    setStudents(newArr);
  }

  useEffect(() => {
    searchedStudents.map((student, index) => {
      if (student.checked && (!students.some((s) => s.id === student.id) || !students.length)) {
        setStudents([...students, student])
        setEvent({...event, requestStudentList: [...event.requestStudentList, student.id]})
      }
    })
  }, [searchedStudents])

  useEffect(() => {
    students.map((student, index) => {
        if(!event.requestStudentList.some((id) => id == student.id)) {
          setEvent({...event, requestStudentList: [...event.requestStudentList, student.id]})
          return
        }

        if(event.requestStudentList.some((id) => id != student.id)) {
          setEvent({...event, requestStudentList: students.map((st) => st.id)})
        }
    })
  }, students)
  console.log(event)
  const handleSearchStudent = index => e => {
    let newArr = [...searchedStudents];
    newArr[index].checked =  e.target.checked;

    setSearchedStudents(newArr);
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
          <input placeholder='estudantes' type="text" name='student' value={searchValue} onChange={handleChangeSearch}/>
          <br/>
          {searchedStudents.map((student, index) => {
            if (!student.checked && (!students.some((s) => s.id === student.id))) {
              return <>
                <input type="checkbox" value={student.checked} onChange={handleSearchStudent(index)}/><span>{student.name}</span>
                <br/>
              </>
            }
          }
         
          )}
          {/* {students.map((student, index) => {
              return (
                <div>
                  <input checked={student.checked} onChange={updateFieldChanged(index)} value={student.id} type="checkbox"/>
                  <label for="html">{student.name}</label>
                </div>
              );
            })
          } */}
        </div>
      </div>
      <div>
        <>
        Lista vip 
            <br/>
         {students.map((student, index) => 
          <>
            <button onClick={handleDeleteStudent(index)}>X</button><span>{student.name}</span>
            <br/>
          </>
          )}
        </>
      </div>
      <button className='btn' onClick={handleCreateEvent}>ENVIAR</button>
      {/* <input type="submit" value="Enviar" /> */}
    </div>    
  );
}