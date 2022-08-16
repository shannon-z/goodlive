import React from 'react'
import LoginView from './LoginView'
import {useDispatch} from 'react-redux'
import * as LoginActions from '../../redux/actions/login'
const Login = () => {
  const dispatch=useDispatch()
  function onLoginEvent(user){
    // 写入到redux中
    dispatch(LoginActions.setLogin(user))
    // 写入到本地
    localStorage.setItem("goodlive",JSON.stringify(user))
    window.history.back()
  }
  return (
    <div>
        <LoginView onLoginEvent={onLoginEvent}/>
    </div>
  )
}

export default Login