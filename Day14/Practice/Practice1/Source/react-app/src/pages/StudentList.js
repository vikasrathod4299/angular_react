import React from 'react'
import {stdData} from '../data.js'
import Student from '../components/Student'


const StudentList = () => {

    return (
    <div>
            <div class="container p-5">
                <h1>Student details page</h1>
                <hr class="w-50"/>
                <div class="d-flex justify-content-around">                    
                    {stdData.map(item=>{
                        return (<Student name={item.name} id={item.id}/>)
                    })}
                </div>
            </div>
    </div>
  )
}

export default StudentList