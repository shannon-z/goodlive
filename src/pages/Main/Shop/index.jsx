import React from 'react'
import Swiper from '../../../components/Swiper'

import banner2 from '../../../assets/images/banner2.png'
import banner3 from "../../../assets/images/banner3.png"
import HomeHotList from './ShopHotList'
import { useSelector } from 'react-redux'
const Shop =()=> {
    const city=useSelector(state=>state.city)
    return (
      <div>
        <Swiper banners={[banner2,banner3]} cityName={city.cityName}/>
        <HomeHotList cityName={city.cityName}/>
      </div>
    )
}
export default Shop