<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> Stashed changes
import Card from '../../components/card/card';
import './events-page.css';
// import API from "../../api";

function EventsPage() {
  let array = [1, 2, 3, 4, 5, 6, 7];

  const cardDescription = () => {
    return (
      <>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolor eveniet natus, tempore, ea, reiciendis cumque voluptas perspiciatis corporis atque ipsum porro..</p>
        <p>Moedas ofertadas: COIN</p>
      </>
    );
  }

  // const handleCreateEvent = () => {

  // }


  return (
    <>
      <button
      >
        <Link to='/criar_evento'>Criar evento</Link>
      </button>
      <div className='events-pg-container'>
        {array.map(() => (
          <Card
            title='Título do evento'
            description={cardDescription()}
            button1='Recusar'
            button2='Aceitar'
          />
        ))}
      </div>
    </>
  );
}

export default EventsPage;