import Card from '../../components/card/card';
import './events-page.css';

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

  return (
    <div className='events-pg-container'>
      {array.map(() => (
        <Card
          title='Título do evento'
          description={cardDescription()}
          button1='Aceitar'
          button2='Recusar'
        />
      ))}
    </div>
  );
}

export default EventsPage;