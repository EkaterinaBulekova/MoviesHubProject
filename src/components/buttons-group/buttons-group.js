import React from 'react'
import Button from '../button/button';

export default function ButtonsGroup({group, active, onClick}) {
  return(
    <div className={group.className}>
      <div className={group.className+"-title"}>{group.title}</div>
        {group.buttons.map((button)=>
          <Button key={button.result} 
            className={(button.result===active) 
              ? (group.className + "-button active") 
              : (group.className + "-button")} 
            name={button.name} 
            onClick={onClick(button.result)}>
          </Button>)}
    </div>
  );
}