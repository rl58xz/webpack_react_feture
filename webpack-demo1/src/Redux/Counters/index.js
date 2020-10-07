import { createStore } from 'redux';
import React, { Component } from 'react';
import PView from './PView';
import store from './reducers';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        count:state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        add:() => dispatch({type:'INCREMENT'}),
        decrease:() => dispatch({type:'DECREMENT'}),
        asyncAdd:() => {
            setTimeout(()=>{
                dispatch({type:'INCREMENT'})
            },2000)
        },
    }
}

class App extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return <div>
            <PView data={this.props.count}></PView>
            <button onClick={this.props.add}>加</button>
            <button onClick={this.props.decrease}>减</button>
            <button onClick={this.props.asyncAdd}>延时加</button>
        </div>
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);