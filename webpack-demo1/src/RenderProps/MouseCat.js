import React from 'react';
import MouseTracker from './MouseTracker';
import Cat from './Cat';
export default class MouseCat extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <MouseTracker render={
            (mouse)=><Cat mouse={mouse}></Cat>
        }></MouseTracker>
    }
}