import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import moment from 'moment'
import 'moment/locale/zh-cn'

console.log(moment.locale());

ReactDOM.render(<App/>,document.getElementById("root"));