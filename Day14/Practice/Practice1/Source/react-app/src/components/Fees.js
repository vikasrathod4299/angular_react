import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Fees = () => {
  let location = useLocation();
  let user= location.state;
  let params = useParams()
  return (
      <div>
        <h1>{user.name}'s fees : {user.fees}</h1>
      </div>
  
  )
}

export default Fees