import userEvent from '@testing-library/user-event'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Result = () => {
  let location = useLocation();
  let user = location.state;
  return (
    <div  >
      <div>
        <h1>{user.name}'s result : Grade : {user.result}</h1>
      </div>
    </div>
  )
}

export default Result