import React, { useEffect } from 'react'
import Swiper from '../../../components/Swiper'
import banner0 from "../../../assets/images/banner4.png"
// import banner2 from '../../../assets/images/banner2.png'
// import banner3 from "../../../assets/images/banner3.png"
import banner4 from "../../../assets/images/banner5.png"
import banner5 from "../../../assets/images/banner6.png"
import HomeList from './HomeList'
import BMap from 'BMap'
import { useSelector, useDispatch } from 'react-redux'
import { changeCity } from '../../../redux/actions/city'

const Home = () => {
  const city = useSelector(state => state.city)
  const dispatch = useDispatch();
  const myCity = new BMap.LocalCity();

  useEffect(()=>{
    myCity.get((res) => {
      let cityName=res.name
      cityName=cityName.substr(0,2)
      dispatch(changeCity(cityName))
    });
  },[])

  return (
    <div>
      <Swiper banners={[banner0, banner4, banner5]} cityName={city.cityName} />
      <HomeList cityName={city.cityName} />
    </div>
  )
}
export default Home