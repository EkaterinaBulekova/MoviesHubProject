import React from 'react';

export default function CustomInput({className, title, value}) {
  return(
    <div className={className}>
      <div className={className+"-title"}>{title}</div>
      <input className={className+"-input"} defaultValue={value}></input>
    </div>
  )
}