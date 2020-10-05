import ReactDOM from 'react-dom';
import React from 'react';
import App from './RenderProps/MouseCat';
import counter from './Redux/Counters/reducers'
let store = createStore(counter);
ReactDOM.render(<App/>,document.getElementById("root"));