import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Card from '../../components/card/card';
import './events-page.css';
import API from '../../api';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents()
  }, [])

  const getEvents = () => {
    API.get('api/user/event')
    .then((response) => {
      setEvents(response.data)
    })
    .catch((response) => {
      console.log('erro', response)
    })
  }

  const cardDescription = (event) => {
    return (
      <>
        <p>{event.description}</p>
        <p>Moedas ofertadas: {event.ifCoins}</p>
      </>
    );
  }

  return (
    <>
      <button
      >
        <Link to='/criar_evento'>Criar evento</Link>
      </button>
      <div className='events-pg-container'>
        {events.map((event, index) => (
          <Card
            title={event.name}
            description={cardDescription(event)}
            button1='Recusar'
            button2='Aceitar'
          />
        ))}
      </div>
    </>
  );
}

export default EventsPage;