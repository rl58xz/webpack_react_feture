import React from 'react';

export default function Input(props){
    const {list} = props
    return (
        <ul>
            {list.map((item) => {
                return <li key={item.id}>{item.value}</li>
            })}
        </ul>
    );
}