import React, { useEffect } from "react";

const HelloWorld = ({name})=>{
    console.log(name);
    return (
        <div>
            <h1>Hello Grittings of the day {name}</h1>
        </div>
    )
} 

export {HelloWorld};