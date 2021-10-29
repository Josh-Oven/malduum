import React, { useState, useEffect, useRef }  from 'react';
import './index.css';
import './objects/vessels';
import Landing from './pages/landing/Landing';
import Armory from './pages/armory/Armory';
import Storage from './pages/storage/Storage';
import Canvas from './pages/final/Canvas';
import TextBox from './components/textbox/TextBox';
import JumpText from './components/text/JumpText';
import Element from './pages/element/Element';

const App = (props) => {
  const [menu, setMenu] = useState('landing');
  const [vessel, setVessel] = useState(null);
  const [mats, setMats] = useState([]);
  const [element, setElement] = useState(null);

  const currentText = useRef(null)

  useEffect(() => {

  }, [menu])

  if(menu === 'landing'){
    return (
      <div className="page-container">
        <div className="page-background">
          <Landing />
          <div className="landing-title-wrapper" onClick={e => setMenu('armory')}>
            <JumpText text="Start" fontSize="23px" className="landing-title"/>
          </div>
        </div>
      </div>
    )
  } else if(menu === 'armory'){
    return (
      <div className="page-container">
        <div className="page-background">
          <Armory callback={setMenu} vesselCallback={setVessel}/>
          <TextBox>
            <JumpText ref={currentText} text="Choose your vessel!" color="black" />
          </TextBox>
        </div>
      </div>
    )
  } else if(menu === 'storage'){
    return (
      <div className="page-container">
        <div className="page-background">
          <Storage callback={setMenu} storageCallback={setMats}/>
          <TextBox>
            <JumpText ref={currentText} text="What ingredients will you use?" color="black" />
          </TextBox>
        </div>
      </div>
    )
  } else if(menu === 'element'){
    return (
      <div className="page-container">
        <div className="page-background">
          <Element callback={setMenu} elementCallback={setElement}/>
          <TextBox>
            <JumpText ref={currentText} text="What ingredients will you use?" color="black" />
          </TextBox>
        </div>
      </div>
    )
  } else if(menu === 'final'){
    return (
      <div className="page-container">
        <div className="page-background">
          <Canvas callback={setMenu} v={vessel} m={mats} e={element}/>
        </div>
      </div>
    )
  }
}

export default App;
