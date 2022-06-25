import React from 'react'
import './style.less'
const Star = (props) => {
  let num=props.num
  if(num>5) num=5
  return (
    <div className='star-container'>
        {
          [1,2,3,4,5].map((ele,index)=>{
            // 如果当前元素应该是亮的，那就将星星的样式添加上light
            let show=num>=ele? <i key={index} className={'icon-star light'}></i>: <i key={index} className={'icon-star'}></i>
            return show
          })
        }
    </div>
  )
}

export default Star