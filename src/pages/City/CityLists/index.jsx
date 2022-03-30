import React, { useState,useEffect } from 'react'
import CitySelect from 'react-city-select'
import cityData from '../../../data/city'
import "./style.less"
import api from '../../../api'
const CityLists = (props) => {
  const [citysData, setCitysData] = useState(cityData)
  function handleSelectCity(cityData) {
    // console.log(cityData)
    props.onEvent(cityData.name)
    
  }
  useEffect(()=>{
    api.getCityLists().then(res=>{
      if(res.status===200){
        // console.log(res.data.result.citylist)
        setCitysData(res.data.result.citylist)
      }
    })
  },[])
  return (
    <div className="citylists">
      <h3>城市列表</h3>
      <CitySelect
        data={citysData}
        onSelectItem={handleSelectCity}>
      </CitySelect>
    </div>
  )
}

export default CityLists