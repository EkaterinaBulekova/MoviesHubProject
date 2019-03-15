import React from "react"

export default function Button({ className = "", ...props }) {
  let classNames = ["btn", className].join(" ");
  return <button className={classNames} {...props}>{props.name}</button>;
}