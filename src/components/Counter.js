import React, { useState } from 'react'

export default function Counter() {

    const [value, setValue] = useState(0);

    function increase() {

        setValue(value + 1);
    }

    function decrease() {

        setValue(value - 1);

        if (value <= -1){
            setValue(0)
        }
    }


    return (
        <div>

            <h1>{value}</h1>
            <h1><button onClick={increase}>Increase +</button></h1>
            <button onClick={decrease}>Decrease -</button>


        </div>
    )
}
