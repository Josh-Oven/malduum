import React from 'react';
import './Canvas.css';
import * as alchemy from '../../logic/alchemy.js';
import * as elements from '../../objects/elements';
import * as vessels from '../../objects/vessels';
import * as materials from '../../objects/materials';
import Title from '../../components/text/Title';
import TextBox from '../../components/textbox/TextBox';
import JumpText from '../../components/text/JumpText';
import DisplayCard from '../../components/DisplayCard/DisplayCard';
let Arcana = alchemy.Arcana;
let Staff = vessels.Staff;


const Canvas = (props) => {
  let staff = new Staff(props.m)
  let newArcana = new Arcana(props.e, staff, 500)

  // console.log(newArcana)

  return(
    <React.Fragment>
      <div className="circle-background-container">
        <img src="./svg/circle.svg" className="circle-background" />
      </div>

        <div className="chunk canvas-container">
          <DisplayCard data={newArcana} />

          <TextBox>
            <JumpText text={`You've created ${newArcana.name}!`} color="black" className="landing-title" />
          </TextBox>
        </div>
    </React.Fragment>
  )
}

export default Canvas;
