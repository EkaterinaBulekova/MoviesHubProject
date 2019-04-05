import React from 'react';

export default function CustomInput({className, title}) {
  return(
    <div className={className}>
      <div className={className+"-title"}>{title}</div>
      <input className={className+"-input"}></input>
    </div>
  )
}