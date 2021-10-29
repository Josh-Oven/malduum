import React, { useState } from 'react';
import './TextBox.css';
import JumpText from '../text/JumpText';

const TextBox = (props) => {
  const [canvasText, setCanvasText] = useState('')

    return(
      <React.Fragment>
        <div className="chunk text-box-wrapper">
          <img src="./svg/text-box.svg" className="text-box-image" />
          <div className="jump-text-container">
            { props.children }
          </div>
        </div>
      </React.Fragment>
    )
}

export default TextBox;
