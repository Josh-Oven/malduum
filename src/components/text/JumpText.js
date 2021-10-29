import React, { useState, useEffect } from 'react';
import '../textbox/TextBox.css';

let counter = 0;
let delay = 0;
let newSplit = []

const JumpText = (props) => {
  const [text, setText] = useState([])
  const [change, setChange] = useState('')

  let splitText = props.text.split('');
  console.log(splitText)
  useEffect(() => {
    newSplit = []
  }, [props.text])

  useEffect(() => {
    splitText = props.text.split('')
  }, [newSplit])

  useEffect(()=>{
    setTimeout(()=>{
      if(counter < splitText.length && splitText.length > 3){
        setText(newSplit.push(splitText[counter]))
        counter++
      }
    },10)
  }, [text])

  return (
    <React.Fragment>

    {
      newSplit.map((c, i) => {
        if(c === " "){
          return(
            <p key={`${c}${i}`} className={`text-box-text ${props.className}`} style={{animationDelay: `${delay}s`, marginRight: "10px", color: props.color, fontSize: props.fontSize}}>
            {c}
            </p>
          )
        } else {
          return(
          <p key={`${c}${i}`} className={`text-box-text ${props.className}`} style={{animationDelay: `${delay}s`, color: props.color, fontSize: props.fontSize}}>
            {c}
          </p>
        )
      }
    })
  }

    </React.Fragment>
  )
}

export default JumpText;
