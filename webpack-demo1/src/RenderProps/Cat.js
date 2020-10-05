import React from 'react';
export default class Cat extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {mouse} = this.props;
        return <div style={{position:"absolute",left:`${mouse.x}px`,top:`${mouse.y}px`,backgroundColor:'red',width:'100px',height:'100px'}}></div>
    }
}