import React from 'react';
import ReactDOM from 'react-dom';
import './style.less'
import './assets/css/common.less'
import './assets/css/font.css'
import './assets/css/iconfont.css'
import AppRouter from './router'
import '../src/assets/csstest/iconfont.css'
import { Provider } from 'react-redux'
import store from "./redux/store"
import * as LoginActions from '../src/redux/actions/login'
import "./utils/init"
// 查询当前浏览器中是否存在登录信息
// if(localStorage.getItem("goodlive")){
//   store.dispatch(
//     // 写入到redux中
//     store.dispatch(LoginActions.setLogin(JSON.parse(localStorage.getItem("goodlive"))))
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

