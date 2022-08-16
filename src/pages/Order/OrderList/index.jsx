import React, { useEffect, useState } from 'react'
import api from '../../../api'
import OrderListView from '../OrderListView'
const OrderList = (props) => {
    const [orderListData,setOrderListData]=useState([])
    useEffect(() => {
        api.order({
            username:props.user.nick
        }).then(res=>{
            if(res.data.status===200){
                // 成功获取数据
                setOrderListData(res.data.order)
            }
        })
    }, [])
    return (
        <div>
            {orderListData.length>0?
            <OrderListView orderListData={orderListData} user={props.user}/>:
            <div>等待数据加载</div>}
        </div>
    )
}

export default OrderList