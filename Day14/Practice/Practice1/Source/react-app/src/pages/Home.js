import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <Link to='/students'>
        <button className='btn btn-success'>Student List</button>
      </Link>
    </div>
  )
}

export default Home