function Card(props) {
  const {
    title,
    description,
    button1,
    button2
  } = props;

  return (
    <div>
      <h3>{title}</h3>
      
      <div>
        {description}
      </div>

      <div>
        <button>{button1}</button>
        <button>{button2}</button>
      </div>
    </div>
  )
}

export default Card;