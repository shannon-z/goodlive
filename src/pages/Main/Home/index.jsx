import React, { useEffect } from 'react'
import Swiper from '../../../components/Swiper'
import banner0 from "../../../assets/images/banner4.png"
// import banner2 from '../../../assets/images/banner2.png'
// import banner3 from "../../../assets/images/banner3.png"
import banner4 from "../../../assets/images/banner5.png"
import banner5 from "../../../assets/images/banner6.png"
import HomeList from './HomeList'
import BMap from 'BMap'
import { useSelector, useDispatch, connect } from 'react-redux'
import { initCITY } from '../../../redux/actions/city'
const Home = () => {
  const city = useSelector(state => state.city)
  const dispatch = useDispatch();
  var myCity = new BMap.LocalCity();
  let siteCity = ""
  myCity.get((res) => {
    siteCity = res.name;
  });
  function initCityToSite(city) {
    // 分发组装好的action，其中包含type和cityName
    dispatch(initCITY(city))
  }
  var myCity = new BMap.LocalCity();
  myCity.get(async result => {
    var cityName = result.name;
    defaultState.cityName = cityName//这句没生效
    // console.log(defaultState)
  });
  return (
    <div>
      <Swiper banners={[banner0, banner4, banner5]} cityName={city.cityName} />
      <HomeList cityName={city.cityName} />
    </div>
  )
}
export default Home