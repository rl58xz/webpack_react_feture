import React,{ useEffect, useState} from 'react';

const useMousePosition = () => {
    const [position,setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        
        const func = (e) => {
            setPosition({x:e.clientX,y:e.clientY});
        }
        console.log('inner')
        document.addEventListener('mousemove',func);
         return ()=>{
             document.removeEventListener('mousemove',func)
        }
    },[]);

    return position;
}
export default useMousePosition;