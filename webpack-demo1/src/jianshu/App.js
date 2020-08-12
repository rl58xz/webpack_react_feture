import React from 'react';
import {Globalstyle} from './style';
import Header from './common/header/index';

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Globalstyle />
                <Header/>
            </React.Fragment>
        );
    }
}
