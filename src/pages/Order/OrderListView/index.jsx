import React from 'react'
import Item from '../Item'
import "./style.less"


const OrderListView = (props) => {
  console.log(props.orderListData)
  return (
    <div>
      {
        props.orderListData.map((ele,index)=>{
          return <Item data={ele} key={index} user={props.user}></Item>
        })
      }
    </div>
  )
}

export default OrderListView