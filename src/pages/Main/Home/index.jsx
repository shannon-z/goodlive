import React from 'react'
import HeaderNav from '../../../components/HeaderNav'
import Swiper from '../../../components/Swiper'
import banner1 from"../../../assets/images/banner1.png"
import banner2 from '../../../assets/images/banner2.png'
import banner3 from "../../../assets/images/banner3.png"
import HomeHotList from './HomeHotList'
import { useSelector } from 'react-redux'
const Home =()=> {
    const city=useSelector(state=>state.city)
    return (
      <div>
        <HeaderNav cityName={city.cityName}/>
        <Swiper banners={[banner1,banner2,banner3]}/>
        <HomeHotList cityName={city.cityName}/>
      </div>
    )
  
}
export default Home