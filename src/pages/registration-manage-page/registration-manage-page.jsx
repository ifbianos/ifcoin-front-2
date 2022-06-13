import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import data from '../../jsons/registers.json';
import './registration-manage-page.css';
import API from "../../api";

export default function RegistrationManagePage() {
  const [requests, setRequests] = useState([]);
  const cardDescription = (data) => {
    return (
      <>
        <p>Inscrição pendente</p>
        <p>{`Tipo: ${data.role}`}</p>
        <p>{`Nome: ${data.name} ${data.lastName}`}</p>
        <p>{`CPF: ${data.cpf}`}</p>
      </>
    );
  }

  const getPendingRegisters = () => {
    API.get('api/user/requestaccount')
    .then((request) => {
      console.log(request)
      setRequests(request.data)
      console.log(requests)

    })
  }

  const handleChangeB1 = (cpf) => {
    API.delete(`api/user/register?cpf=${cpf}`)
    .then(() => {
      console.log('deu bom')
      getPendingRegisters() 
    })
  }

  const handleChangeB2 = (cpf) => {
    API.post(`api/user/register?cpf=${cpf}`)
    .then(() => {
      console.log('deu bom')
      getPendingRegisters() 
    })
  }



  useEffect(() => {
    getPendingRegisters()
  }, [])

  return (
    <div className='registration-pg-container'>
      {requests.map((item) => (
        <Card
          title='Registro Pendente'
          description={cardDescription(item)}
          button2='Aceitar'
          button1='Recusar'
          item={item}
          handleChangeB1={handleChangeB1}
          handleChangeB2={handleChangeB2}
        />
      ))}
    </div>
  )
}