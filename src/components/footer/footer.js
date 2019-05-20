import {connect} from "react-redux";
import React from "react";
import styles from "./footer.css";

const AppFooter = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>
        {props.name}
      </div>
    </footer>
  )
}

function mapStateToProps(state){
  const {name} = state;
  return {name: name};
}

export default connect(mapStateToProps)(AppFooter)