import React from 'react'
import "./style.less"
const CurrentCity = (props) => {
  return (
    <div className="current-city">
        <h3>当前城市：{props.title}</h3>
    </div>
  )
}

export default CurrentCity