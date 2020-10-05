import React from 'react';

export default class MouseTracker extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            x:0,
            y:0
        }
        this.handleMove = this.handleMove.bind(this);
    }

    handleMove(event){
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }

    render(){
        return <div style={{height:"100vh"}} onMouseMove={this.handleMove}>
            {this.props.render(this.state)}
        </div>
    }
}