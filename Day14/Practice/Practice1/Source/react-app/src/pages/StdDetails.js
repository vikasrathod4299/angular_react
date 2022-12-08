import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { stdData } from '../data';

const StdDetails = () => {
  let params = useParams();

  let user = stdData.find((item)=> {return item.id==params.id})  

  return (
    <div className='container p-5'>
          <h1>Student {params.id} details...</h1>
          <hr class="w-50"/>
          <div>
            <Link to={'/students/'+params.id+'/fees'} state={user}>
              <button className='btn btn-warning'>Fees</button> 
            </Link>
            <Link to={'/students/'+params.id+'/result'} state={user}>
              <button className='btn btn-danger mx-4'>Result</button> 
            </Link>
          </div>
          <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <Outlet/>
          </div>
    </div>
  )
}

export default StdDetails