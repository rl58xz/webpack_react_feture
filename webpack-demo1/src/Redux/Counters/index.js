import { createStore } from 'redux';
import React, { Component } from 'react';
import PView from './PView';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    add = () => {
        store.subscribe(() => {
            console.log(store.getState())
        });
    }
    render(){
        return <div>
            <PView data={store.getState()}> </PView>
            <button onClick={this.add}>加</button>
        </div>
    }
}
