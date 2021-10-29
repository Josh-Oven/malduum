import React, { useState, useEffect } from 'react';
import './Storage.css';
import data from './mats.json';
const materials = require('../../objects/materials');

let tempSelected = ['', '', '']

const Storage = (props) => {
  const [selected, setSelected] = useState(['', '', '']);
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  console.log(selected)

  let temp2 = tempSelected;

  let findSelected = (mat) =>{
    if(one === ''){
      tempSelected[0] = mat
      setOne(mat.name)
    } else if(two === ''){
      tempSelected[1] = mat
      setTwo(mat.name)
    } else if(three === ''){
      tempSelected[2] = mat
      setThree(mat.name)
      setSelected(tempSelected)
    }
  }

  if(selected[2] !== ''){
    return (
      <React.Fragment>
        <div className="chunk storage-wrapper">
          <div className="storage-shelf">
            {
              data.map((m, i) => {
                if(i < data.length/2){
                  return (
                    <p className="storage-item-title" onClick={e => findSelected(m)}>
                      {m.name}
                    </p>
                  )
                }
              })
            }
          </div>

          <div className="cauldron" style={{backgroundImage: "url(./svg/cauldron.svg)"}}>
            <div className="cauldron-text-container">
              <p className="cauldron-text">{one}</p>
              <p className="cauldron-text">{two}</p>
              <p className="cauldron-text">{three}</p>
            </div>
          </div>

          <div className='next-button-container'>
            <p className="cauldron-text" style={{color: "black"}} onClick={e => {props.callback('element'); props.storageCallback(selected)}}>next!</p>
          </div>

          <div className="storage-shelf">
          {
            data.map((m, i) => {
              if(i >= data.length/2){
                return (
                  <p className="storage-item-title" onClick={e => findSelected(m)}>
                    {m.name}
                  </p>
                )
              }
            })
          }
          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div className="chunk storage-wrapper">
          <div className="storage-shelf">
            {
              data.map((m, i) => {
                if(i < data.length/2){
                  return (
                    <p className="storage-item-title" onClick={e => findSelected(m)}>
                      {m.name}
                    </p>
                  )
                }
              })
            }
          </div>

          <div className="cauldron" style={{backgroundImage: "url(./svg/cauldron.svg)"}}>
            <div className="cauldron-text-container">
              <p className="cauldron-text">{one}</p>
              <p className="cauldron-text">{two}</p>
              <p className="cauldron-text">{three}</p>
            </div>
          </div>

          <div className="storage-shelf">
          {
            data.map((m, i) => {
              if(i >= data.length/2){
                return (
                  <p className="storage-item-title" onClick={e => findSelected(m)}>
                    {m.name}
                  </p>
                )
              }
            })
          }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Storage;
