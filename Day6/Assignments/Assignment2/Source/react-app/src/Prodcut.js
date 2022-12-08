import React from 'react'

const Prodcut = ({item}) => {
    
  return (
    <div>
         <div >                        
             <p><strong>Title:- </strong>{item.title}</p> 
             <p><strong>Price:- </strong>{item.price}</p> 
             <p><strong>Quantity:- </strong>{item.quantity}</p> 
             <p><strong>Discount:- </strong>{item.price*item.quantity*0.05}</p> 
             <p><strong>Total:- </strong>{(item.price*item.quantity)-(item.price*item.quantity*0.05)}</p> 
         </div>        
    </div>
  )
}

export default Prodcut