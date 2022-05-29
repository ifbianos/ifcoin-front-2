import './card.css';

function Card(props) {
  const {
    title,
    description,
    button1,
    button2
  } = props;

  return (
    <div className='card-container'>
      <div className='card'>
        <h3>{title}</h3>
        
        <div>
          {description}
        </div>

        <div className='btn-container'>
          <button className='btn'>{button1}</button>
          <button className='btn'>{button2}</button>
        </div>
      </div>
    </div>
  )
}

export default Card;