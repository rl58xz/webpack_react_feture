import React,{Fragment, useEffect, useState} from 'react';

const LikeButton = () => {
    const [obj,setObj] = useState({x: 0, y: 0});

    useEffect(() => {
        
        const func = (e) => {
            setObj({x:e.clientX,y:e.clientY});
        }
        console.log('inner')
        document.addEventListener('click',func);
         return ()=>{document.removeEventListener('click',func)}
    });

    return(
        <Fragment>
            <p>X:{obj.x},Y:{obj.y}</p>
        </Fragment>
        
    );
}
export default LikeButton;