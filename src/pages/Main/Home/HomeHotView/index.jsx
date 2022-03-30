import React from 'react'
import { nanoid } from 'nanoid';
import "./style.less"
const HomeHotView = (props) => {
  const { data } = props.data
  return (
    <div className="hotproduct">
      <h3>{props.title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {props.data.map((ele, index) => {
            return (
              <li key={nanoid()}>
                <a href={ele.link}>
                  <img src={ele.img} alt="" />
                  <span>{props.city+ele.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  )
}
export default HomeHotView