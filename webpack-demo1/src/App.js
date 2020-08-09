import React from 'react';
import Input from './Input';
import List from './List';
import test1 from './img/ts1.jpeg';
import ke3 from './img/3ke.jpg';
import baoma from './img/baoma.jpg'
import car from './img/car.jpg';
import daziranwm from './img/daziranwm.jpg';
import disini from './img/disini.jpg';
import ditu from './img/ditu.jpg';
import haiyanhubei from './img/haiyanhubei.jpg';
import hehua from './img/hehua.jpg';
import hsyun from './img/hsyun.jpg';
import LazyLoad from 'react-lazyload';
const Image = React.lazy(()=>import('./Image'));

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(value){
        this.setState({
            list:this.state.list.concat({
                id: `${this.state.list.length}`,
                value
            })
        });
    }

    render(){
        return (
            <div>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={test1}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={ke3}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={baoma}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={car}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={daziranwm}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={disini}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={ditu}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={haiyanhubei}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={hehua}/>
                </React.Suspense>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Image src={hsyun}/>
                </React.Suspense>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
                <Input click={this.onClick}></Input>
                <List list={this.state.list}></List>
            </div>
        );
    }
}