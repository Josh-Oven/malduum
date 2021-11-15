import React, { useState } from 'react';
import * as alchemy from '../../logic/alchemy.js';
import * as elements from '../../objects/elements';
import * as vessels from '../../objects/vessels';
import * as materials from '../../objects/materials';
import './Armory.css';
import TextBox from '../../components/textbox/TextBox';
let Staff = vessels.Staff;

const Armory = (props) => {
  const [selected, setSelected] = useState(null);
  let text = 'Choose your vessel!'

  return (
    <React.Fragment>
      <div className="chunk catalog-wrapper">

        <div className="shelf" onClick={e => {props.callback('storage'); props.vesselCallback('staff')}}>
          <img src="./svg/staff-tall2.svg" className="shelf-image"/>
        </div>

        <div className="shelf" onClick={e => {props.callback('storage'); props.vesselCallback('wand')}}>
          <img src="./svg/wand-tall.svg" className="shelf-image"/>
        </div>

        <div className="shelf" onClick={e => {props.callback('storage'); props.vesselCallback('claymore')}}>
          <img src="./svg/claymore-tall.svg" className="shelf-image"/>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Armory;
