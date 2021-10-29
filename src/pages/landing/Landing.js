import React, { useEffect, useRef } from 'react';
import '../../index.css';
import './Landing.css';
import Title from '../../components/text/Title';
import JumpText from '../../components/text/JumpText';

let myFont = new FontFace (
    'pressStart',
    'url(https://fonts.gstatic.com/s/pressstart2p/v9/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2)'
)

const Landing = (props) => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = 'none';

     myFont.load().then((font) => {
       document.fonts.add(font);
       context.font = "100px pressStart"
       context.strokeStyle = 'black';
       context.lineWidth = 5;
       context.strokeText('Malduum', 300, 150);
       context.fillStyle = 'white';
       context.fillText('Malduum', 300, 150);
       context.className = "landing-title";
     })
  }, [])

  return (
    <React.Fragment>
      <canvas ref={canvasRef} width="1300" height="400">
      </canvas>
    </React.Fragment>
  )
}

export default Landing;
