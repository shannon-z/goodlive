import React, { useState } from 'react'
import './style.less'
import { nanoid } from 'nanoid';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination'
import HeaderNav from '../HeaderNav';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Swiper = (props) => {
  const [index, setIndex] = useState(0)
  function handleChangeIndex(index) {
    setIndex(index)
  }

  return (
    <div>
      <div className="swiper">
        
        <AutoPlaySwipeableViews interval={1900} index={index} onChangeIndex={handleChangeIndex}>
          {
            props.banners.map((ele, index) => {
              return (
                <div key={nanoid()} className="swiper-view">
                  <img src={ele} alt="" />
                </div>)
            })
          }
        </AutoPlaySwipeableViews>
        <HeaderNav cityName={props.cityName}/>
        <Pagination len={props.banners.length} currentIndex={index} />
      </div>
    </div>
  )
}

export default Swiper
