import ReactDOM from 'react-dom';
import React from 'react';
import App from './Hooks/useState/LikeButton';
import counter from './Redux/Counters/reducers';
import store from './Redux/Counters/reducers';
import {Provider} from 'react-redux'

// const render = () => {ReactDOM.render(<App/>,document.getElementById("root"));}
// render();
// store.subscribe(render);

ReactDOM.render(<Provider store={store}><App/></Provider>
,document.getElementById("root"));