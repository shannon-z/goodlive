import React, { useState, useEffect } from 'react'
import api from '../../../../api'
import HomeBar from '../HomeBar'
const HomeList = (props) => {
  const [hot1List, sethot1List] = useState([])
  const [hot2List, sethot2List] = useState([])
  const [cityName, setCityName]=useState(props.cityName)
  useEffect(() => {
    api.getHomeHot1({
      cityName:props.cityName
    }).then(res => {
      if (res.data.status === 200) {
        // console.log(res.data.result)
        sethot1List(res.data.result)
        setCityName(res.data.city)
      }
    })
  }, [])
  useEffect(() => {
    api.getHomeHot2({
      cityName:props.cityName
    }).then(res => {
      if (res.data.status === 200) {
        sethot2List(res.data.result)
        setCityName(res.data.city)
      }
    })
  }, [])
  return (
    <div>
      {hot1List.length>0 ? <HomeBar data={hot1List} city={cityName} title={"热门商品"}/>:<div>等待数据加载···</div>}
      {hot2List.length>0 ? <HomeBar data={hot2List} city={cityName} title={"新品推荐"}/>:<div>等待数据加载···</div>}
    </div>
  )
}

export default HomeList