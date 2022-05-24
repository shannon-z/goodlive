import React from 'react'
import { nanoid } from 'nanoid';
import { Link } from "react-router-dom"
import nav1 from '../../../../assets/icon/nav-1.png'
import nav2 from '../../../../assets/icon/nav-2.png'
import nav3 from '../../../../assets/icon/nav-3.png'
import nav4 from '../../../../assets/icon/nav-4.png'
import "./style.less"
const HomeBar = (props) => {
  let data = [
    {
      id: Math.random().toString().slice(2),
      title: "整租",
      img: nav1,
      link: "/zhengzu"
    },
    {
      id: Math.random().toString().slice(2),
      title: "合租",
      img: nav2,
      link: "http://www.iwenwiki.com"
    },
    {
      id: Math.random().toString().slice(2),
      title: "地图找房",
      img: nav3,
      link: "/graphfind"
    },
    {
      id: Math.random().toString().slice(2),
      title: "出租",
      img: nav4,
      link: "http://www.iwenwiki.com"
    }
  ]
  return (
    <div className="hotproduct">
      <div className="hot-container">
        <ul className="clear-fix">
          {data.map((ele, index) => {
            return (
              <li key={nanoid()}>
                <Link to={ele.link}>
                  <img src={ele.img} alt="" />
                  <span>{ele.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  )
}
export default HomeBar