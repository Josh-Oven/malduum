import React, { useState } from 'react';
import * as elements from '../../objects/elements';
import './Element.css';

let chaos = elements.chaos;
let holy = elements.holy;

const Element = (props) => {
  const [selected, setSelected] = useState(null);
  let text = 'Choose your vessel!'

  return (
    <React.Fragment>
      <div className="chunk catalog-wrapper">

        <div className="shelf element-container" onClick={e => {props.callback('final'); props.elementCallback(chaos)}}>
          <img src="./svg/chaos.svg" className="shelf-image"/>
        </div>

        <div className="shelf element-container" onClick={e => {props.callback('final'); props.elementCallback(holy)}}>
          <img src="./svg/holy.svg" className="shelf-image"/>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Element;
