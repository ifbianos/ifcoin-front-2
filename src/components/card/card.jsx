import './card.css';

function Card(props) {
  const {
    title,
    description,
    button1,
    button2,
    item,
    handleChangeB1,
    handleChangeB2
  } = props;

  console.log(handleChangeB2)

  return (
    <div className='card-container'>
      <h3>{title}</h3>
      
      <div>
        {description}
      </div>

      <div className='btn-container'>
        <button className='btn' id='deny'  onClick={() => handleChangeB1 ? handleChangeB1(item.cpf) : null}>{button1}</button>
        <button className='btn' onClick={() => handleChangeB2 ? handleChangeB2(item.cpf) : null }>{button2}</button>
      </div>
    </div>
  )
}

export default Card;