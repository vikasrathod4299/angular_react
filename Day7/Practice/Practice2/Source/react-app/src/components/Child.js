import React, { useState } from 'react'

const Child = (props) => {
    let [name, setName] = useState('');
    props.func(name)
  return (
    <div>
        <input type="text" name="name" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Child