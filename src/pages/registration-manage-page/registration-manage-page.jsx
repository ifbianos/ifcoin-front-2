import Card from "../../components/card/card";
import data from '../../jsons/registers.json';


export default function RegistrationManagePage() {
  const cardDescription = (data) => {
    return (
      <>
        <p>{`Inscrição pendente`}</p>
        <p>{`Tipo: ${data.role}`}</p>
        <p>{`Nome: ${data.name} ${data.lastName}`}</p>
        <p>{`CPF: ${data.cpf}`}</p>
      </>
    );
  }

  return (
    <div className='registration-pg-container'>
      {data.map((item) => (
        <Card
          title='Registro Pendente'
          description={cardDescription(item)}
          button1='Aceitar'
          button2='Recusar'
        />
      ))}
    </div>
  )
}