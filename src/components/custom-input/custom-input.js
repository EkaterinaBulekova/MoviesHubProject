import React from 'react';
import styles from "./search-input.css";


export default function CustomInput({className, title, value}) {
  return(
    <div className={styles.search_field}>
      <div className={styles.search_field_title}>{title}</div>
        <input className={styles.search_field_input} defaultValue={value}></input>
    </div>
  )
}