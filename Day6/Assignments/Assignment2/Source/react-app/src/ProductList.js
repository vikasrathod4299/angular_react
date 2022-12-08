import React, { useState } from 'react'
import Prodcut from './Prodcut';

const ProductList = () => {
    let [prod, setProd] = useState({});
    let [prodList, setList] = useState([]);
        
    const handleProd=(e)=>{
        setProd(p=>({...p,[e.target.name]:e.target.value}))
    }
    console.log(prodList);
    return (
        <div>
            <input type="text" name="title" placeholder='Title' onChange={handleProd}/>
            <input type="number" name="price" placeholder='Price' onChange={handleProd}/>
            <input type="number" name="quantity" placeholder='Quantity' onChange={handleProd}/>
            <button onClick={(e)=>setList([...prodList,prod])}>Submit</button>
            {
                prodList.map((item)=>{
                    return <Prodcut item={item}></Prodcut>
                })
            }
        </div>
  )
}

export default ProductList