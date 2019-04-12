import {connect} from "react-redux";
import React from "react";

const AppFooter = (props) => {
  return (
    <footer className="app-footer">
      <div className="app-footer-name">
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