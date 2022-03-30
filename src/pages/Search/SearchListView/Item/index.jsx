import React from 'react'
import "./style.less"
const Item = (props) => {
  return (
    <div className='list-item'>
        <img src={props.data.img} alt='' />
        <div className='mask'>
          <div className='left'>
            <p>{props.data.title}</p>
            <p>{props.data.houseType}</p>
          </div>
          <div className='right'>
            <div className='btn'>
              {props.data.rentType}
            </div>
            <p dangerouslySetInnerHTML={{__html:props.data.price+"元/月"}}></p>
          </div>
        </div>
      </div>
  )
}

export default Item