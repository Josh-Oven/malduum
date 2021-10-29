import React from 'react';
import './DisplayCard.css';

const DisplayCard = (props) => {
  console.log(props.data)

  return(
    <div className="display-card-container">
      <div className="card-image-container">
        <img src={props.data.image} className="card-image"/>
      </div>

      <div className="card-title-container">
        <p className="card-title">
          {props.data.name}
        </p>
        <p className="card-title">
          {`Element: ${props.data.element.name}`}
        </p>
        <p className="card-title">
          {`Tier: ${props.data.tier}`}
        </p>
        <p className="card-title">
          {`Bonus: ${props.data.bonus}%`}
        </p>
        <p className="card-title">
          {`Mana: ${props.data.mana}`}
        </p>
      </div>
    </div>
  )
}

export default DisplayCard;
