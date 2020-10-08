import React,{Fragment, useEffect, useState} from 'react';

const LikeButton = () => {
    const [obj,setObj] = useState({like: 0, on: true});

    useEffect(() => {
        document.title = `点击了${obj.like}次`
    });

    return(
        <Fragment>
            <button onClick = {() => {setObj({like:obj.like+1,on:obj.on})}}>
            {obj.like}👍
        </button>
        <button onClick = {() => {setObj({like:obj.like,on:!obj.on})}}>
        {obj.on?'ON':'OFF'}
    </button>
        </Fragment>
        
    );
}
export default LikeButton;