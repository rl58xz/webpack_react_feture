import Axios from 'axios';
import React from 'react';

const withLoader = (Component,url) => {
    return class LoaderComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                data: null,
                isLoading: false
            }
        }

        componentDidMount(){
            this.setState(
                {
                    isLoading: true
                }
            );
            Axios.get(url).then(
                result => {
                    this.setState({
                        data: result.data,
                        isLoading: false
                    })
                }
            )
        }

        render(){
            const {data, isLoading} = this.state;
            return(<>
            {
                (isLoading || !data) ? <p>data is isLoading</p>:<Component {...this.props} data = {data}/>
            }
            </>
            );
        }
    }
}

export default withLoader