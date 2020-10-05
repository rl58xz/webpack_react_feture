import React,{useState,useEffect} from 'react';
export default function CountsDemo(props){
    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = count
    });
    return <div>
        <p>you clicked {count}</p>
        <button onClick={() => setCount(count + 1)}>click</button>
    </div>
}