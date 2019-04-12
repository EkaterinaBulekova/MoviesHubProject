import {connect} from "react-redux";
import React from "react"

const Header = (props) => {
  return (
  <div className="app-header">
    <div className="header-name">
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