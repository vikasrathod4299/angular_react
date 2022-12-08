import React, { useState } from 'react'

const AreaOfRectengle = () => {
  let [height,setHeight] = useState(0);
  let [width,setWidth] = useState(0);
  let [res, setRes] = useState(false);

  return (
    <div>
        <h1>Area of rectangle</h1>
        <form  action="">
            <div className="form-group">
                <label >Height</label>
                <input className="form-control" type="number" id="height" name="height" placeholder=" Enter height" onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="form-group">
                <label >Width</label>
                <input className="form-control" type="number" id="width" name="width" placeholder=" Enter width" onChange={(e)=>setWidth(e.target.value)}/>
            </div>
            <button type="button" onClick={(e)=> setRes(height*width)} className="btn btn-info"  >Find area of ractengle!</button>
        </form>
        <h1>
          {res}
        </h1>
    </div>
  )
}

export default AreaOfRectengle