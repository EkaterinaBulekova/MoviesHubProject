import React from "react"

export default function Button({ className = "", type="button", ...props }) {
  const classNames = ["btn", className].join(" ");
  return <button className={classNames} type={type} {...props}>{props.name}</button>;
}