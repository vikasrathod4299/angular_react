import React from 'react'
import { Link } from 'react-router-dom'

const Student = (props) => {

  return (
    <div className='card'>
    <div class="card-body">
        <div>
          <h5 class="card-title">Student:</h5>
          <p className='text-success'><strong>{props.name}</strong></p>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <Link to={"/students/"+props.id}>
            <button class="btn btn-primary">Details</button>
        </Link>
    </div>
    </div>
  )
}

export default Student