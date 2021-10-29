import React from 'react';
import './Text.css';

const Title = (props) => {

  const wrapperStyle = {
    width: props.width

  }

  const style = {
    fontSize: props.fontSize,
    color: props.color,
    textAlign: props.align,
    fontWeight: props.weight,
    backgroundColor: props.backgroundColor,
    border: props.border,
    cursor: props.cursor,
    marginLeft: props.marginLeft
  }

  return (
    <div className={`title-wrapper`} style={wrapperStyle}>
      <p className={`title ${props.className}`} id={props.id} style={style} onClick={props.onClick}>{props.text}</p>
    </div>
  )
}

export default Title;
