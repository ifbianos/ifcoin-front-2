import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Card from '../../components/card/card';
import './events-page.css';
import API from '../../api';

import { useUser } from '../../context/user-context';
import SideBar from '../../components/side-bar/side-bar';

import { useSideBar } from '../../context/side-bar-context';

function EventsPage() {
  const [events, setEvents] = useState([]);

  const {
    user
  } = useUser();

  const {
    inactive,
    setInactive
  } = useSideBar();

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

  console.log('inactive', inactive)

  return (
    <>
      <SideBar inactive={inactive} setInactive={setInactive} />
      <div className={`events-pg-container ${!inactive ? 'full-page' : ''}`}>
        {events.map((event, index) => {
          console.log('user.role', user.role)
          return user.role === 'aluno' ?
           <Card
            title={event.name}
            description={cardDescription(event)}
            button1='Recusar'
            button2='Aceitar'
          /> :
          <Card
            title={event.name}
            description={cardDescription(event)}
            button2='Acompanhar'
          />
        }
        )}
      </div>
    </>
  );
}

export default EventsPage;