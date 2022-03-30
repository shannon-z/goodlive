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
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

