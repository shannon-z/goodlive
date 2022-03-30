import React from 'react'
import './style.less'
import { nanoid } from 'nanoid';
import classnames from 'classnames'
const Pagination = (props) => {
  const arr = new Array(props.len);
  const currentIndex=props.currentIndex;
  arr.fill(1)
  return (
    <div className="swiper-pagination">
      <ul>{arr.map((ele, index) => {
        return <li key={nanoid()} className={classnames({"selected":currentIndex===index})}></li>
      })}
      </ul>
    </div>
  )
}

export default Pagination