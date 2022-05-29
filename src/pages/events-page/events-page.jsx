import Card from '../../components/card/card';
import './events-page.css'

function EventsPage() {
  let array = [1, 2, 3, 4];

  const cardDescription = () => {
    return (
      <>
        <p>Esse evento...</p>
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