import React from 'react'
import { useSelector } from 'react-redux'
import BuyAndStoreView from '../BuyAndStoreView'

const BuyAndStore = (props) => {
  const login=useSelector(state=>state.login)
  const collects=useSelector(state=>state.collect)
  console.log(collects)
  return (
    <div className='buyandstore'>
        <BuyAndStoreView user={login.user} collects={collects} id ={props.id}/>
    </div>
  )
}

export default BuyAndStore