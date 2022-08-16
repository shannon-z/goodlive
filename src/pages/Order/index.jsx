import React, { useEffect } from 'react'
import PubHeader from '../../components/PubHeader'
import OrderList from './OrderList'
import UserInfo from './UserInfo'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
const Order = (props) => {
  const city = useSelector(state => state.city)
  const user = useSelector(state => state.login.user)
  useEffect(() => {
    if (!user.token) {
        props.history.push('/login')
    }
}, [])
  return (
    <div>
        <PubHeader title="订单列表"/>
        <UserInfo city={city} user={user}/>
        <OrderList user={user}/>
    </div>
  )
}

export default withRouter(Order)