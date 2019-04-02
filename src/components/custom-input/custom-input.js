import React from 'react';

export default function CustomInput({className, title, onChange, onEnter}) {
    return(
      <div className={className}>
        <div className={className+"-title"}>{title}</div>
        <input className={className+"-input"} onChange={e=>onChange(e.target.value)} onKeyUp={(e) => onEnter(e.key==='Enter')}></input>
      </div>
    )
}