import React, { useState } from 'react'

const SignUp = () => {
    let [form, setForm] = useState({});
    let [empList, setEmpList] = useState([]);

    const handleForm = (e)=>{
        setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const sort = (e) => {
        setEmpList(p=>[...p.sort((a,b)=>{
            return a.Name.localeCompare(b.Name)
        })])
    }
    const dateFilter = (e)=>{
        setEmpList([...empList.filter((item) => item.DOJ.split('-')[1] == new Date().getMonth()+1)])
    }
  
    return (
        <div className="container">
        <h1>Sign up form</h1>
        <form className="d-grid gap-4">
            <div className="form-group">
                <label htmlFor="EmployeeID">EmployeeID</label>
                <input type="text" className="form-control" id="EmployeeID" name="EmployeeID" onChange={handleForm} placeholder="Enter Employee ID."/>
            </div>
            <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" className="form-control" id="Name" name="Name" onChange={handleForm} placeholder="Enter Name."/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" name="address" onChange={handleForm} placeholder="Enter address." />
            </div>  
            <div className="form-group">
                <label > Gender</label>
                <div className="d-flex">
                    <div className="form-check">
                    <input type="radio" className="form-check-input" id="gender" name="gender" onChange={handleForm} value="Male"  /> 
                    <label className="form-check-label" htmlFor="gender">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" className="form-check-input" id="gender" name="gender" onChange={handleForm} value="Female"  />
                    <label className="form-check-label" htmlFor="gender">
                        Female
                    </label>
                </div>
            </div>
                
            </div>
            <div className="form-group">
                <label htmlFor="DOJ">Date of joining</label>
                <input type="date" className="form-control" id="DOJ" name="DOJ" onChange={handleForm} placeholder="Enter PAN number." />
            </div>  
            <div className="form-group">
                <label htmlFor="Hobbies">Hobbies</label>
                <input type="text" className="form-control" id="Hobbies" name="Hobbies" onChange={handleForm} placeholder="Enter password." />
            </div>
            <button type="button" className="btn btn-info" onClick={(e)=>setEmpList((p)=>[...p,form])}>Sign UP!</button>
        </form>

        <div>
            <table className="table">
                <tr>
                    <th>EmployeeID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>DOJ</th>
                    <th>Hobbies</th>
                </tr>
                {
                empList.map((item)=>{
                        return (<tr>
                            <td>{item.EmployeeID}</td>
                            <td>{item.Name}</td>
                            <td>{item.address}</td>
                            <td>{item.gender}</td>
                            <td>{item.DOJ}</td>
                            <td>{item.Hobbies}</td>
                        </tr>)
                    })
                }
            </table>
        </div>
        <div className="d-flex justify-content-between">
            <button className="btn btn-warning" onClick={sort}>Sort By Name</button>
            <button className="btn btn-danger" onClick={dateFilter}>Date Filter</button>
        </div>
        </div>
  )
}

export default SignUp