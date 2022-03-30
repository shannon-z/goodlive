import React from 'react'
import "./style.less"
import { withRouter } from 'react-router-dom'


const CityList = (props) => {

  function changeCity(city){
    // console.log(city)
    props.onEvent(city)
    // console.log(props.history)

  }
  return (
    <div className="city-list">
        <h3>热门城市</h3>
        <ul>
          <li onClick={()=>changeCity('沈阳')}><span >沈阳</span></li>
          <li onClick={()=>changeCity('南京')}><span >南京</span></li>
          <li onClick={()=>changeCity('深圳')}><span >深圳</span></li>
          <li onClick={()=>changeCity('上海')}><span >上海</span></li>
        </ul>
    </div>
  )
}

export default withRouter(CityList);