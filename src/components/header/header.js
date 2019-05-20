import {connect} from "react-redux";
import React from "react";
import styles from "./header.css";


const Header = (props) => {
  return (
  <div className={styles.header}>
    <div className={styles.name}>
      {props.name}
    </div>
    {props.children}
  </div>)
}

function mapStateToProps(state){
  const {name} = state;
  return {name: name};
}

export default connect(mapStateToProps)(Header)