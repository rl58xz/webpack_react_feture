import React, { Fragment, useState } from 'react';
import useMousePosition from '../freehooks/useMousePosition';
import withLoader from '../hoc/withLoader'

const DogShow = (props) => {
    return <Fragment>
        <h2>{props.data.status}</h2>
        <img src={props.data.message}/>
    </Fragment>
}
const LikeButton = () => {
    const [obj, setObj] = useState({ like: 0, on: true });
    // const position = useMousePosition();
    const WrappedDog = withLoader(DogShow,'https://dog.ceo/api/breeds/image/random');
    return (
        <Fragment>
            {/* <p>x:{position.x},y:{position.y}</p> */}
            <WrappedDog/>
            <button onClick={() => { setObj({ like: obj.like + 1, on: obj.on }) }}>
                {obj.like}👍
            </button>
            <button onClick={() => { setObj({ like: obj.like, on: !obj.on }) }}>
                {obj.on ? 'ON' : 'OFF'}
            </button>
        </Fragment>

    );
}
export default LikeButton;