import React from 'react';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:""
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange(e){
        this.setState({
            value:e.target.value
        });
    }
    onClick(){
        this.props.click(this.state.value)
    }
    render(){
        return (
        <div>
            <input value={this.state.value} onChange = {this.onChange}></input>
            <button onClick = {this.onClick}>提交</button>
        </div>
        );
    }
}