import React ,{useState} from 'react'
import PubHeader from '../../components/PubHeader'
import CityList from './CityList'
import CurrentCity from './CurrentCity'
// 较为传统的方式是使用connect将组件和redux连接起来，之后使用export default connect()(City)输出
// 这里我们使用较新的方式useSelector,useDispatch
import { useSelector,useDispatch, connect } from 'react-redux'
import { changeCity } from '../../redux/actions/city'
import CityLists from './CityLists'
const City = (props) => {
  // const [city,setCity]=useState('北京')
  const dispatch=useDispatch();
  // 使用useSelector读取store中的city
  const city=useSelector(state=>state.city)
  function onCityEvent(city){
    // 分发组装好的action，其中包含type和cityName
    dispatch(changeCity(city))
    props.history.goBack()
  }
  return (
    <div> 
      <PubHeader title={"城市选择"}/>
      <CurrentCity title={city.cityName}/>
      <CityList onEvent={onCityEvent}/>
      <CityLists onEvent={onCityEvent}/>
    </div>
  )
}

export default City