import React from 'react'
import "./style.less"
import { withRouter } from 'react-router-dom'
const PubHeader = (props) => {
    function bachToHome(){
        props.history.goBack()
    }
  return (
    <div className="commonHeader">
        <span className="choose-icon" onClick={bachToHome}>
            <i className="icon-chevron-left"></i>
        </span>
        <h1>{props.title}</h1>

    </div>
  )
}

export default withRouter(PubHeader)