import React from "react";
import styles from "./message.css"

const Message = ({text}) => {
  return <div className={styles.message_text}>{text}</div>
};

export default Message;