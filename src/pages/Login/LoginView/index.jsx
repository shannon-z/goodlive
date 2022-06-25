import React, { useState } from 'react'
import "./style.less"
import api from '../../../api'
import validator from '../../../utils/validator.js'
import classnames from "classnames"
const LoginView = (props) => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setErrors]=useState({
        username:"",
        password:""
    })
    function onSubmitHandle(e){
        e.preventDefault()
        var {isValid, errors}=validator({
            username,
            password
        })
        if(!isValid){
            api.login({
                username:username,
                password:password
            }).then(res=>{
                if(res.data.status===200){
                    // 登陆成功
                    props.onLoginEvent(res.data)
                    console.log('登陆成功')
                    setErrors({})
                }else{
                    console.log(res)
                    console.log('登陆失败')
                }
            })
        }
        else{
            setErrors(errors)
        }
        
    }
    function changeHandle(e){
        if(e.target.name==='username'){
            setUsername(e.target.value)
        }
        else if(e.target.name==='password'){
            setPassword(e.target.value)
        }
    }
  return (
    <div id="login-container">
            <form onSubmit={onSubmitHandle}>
                <div className={classnames('input-container phone-container ',{'input-container-error ':errors.username})}>
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="用户名/手机号"
                        value={username}
                        onChange={changeHandle}
                    />
                </div>
                <div className={classnames("input-container password-container",{'input-container-error ':errors.password})}>
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input 
                    name='password'
                    placeholder="输入验证码"
                    value={password}
                    onChange={changeHandle}
                    />
                </div>
                <button className="btn-login">登录</button>
            </form>
        </div>
  )
}

export default LoginView