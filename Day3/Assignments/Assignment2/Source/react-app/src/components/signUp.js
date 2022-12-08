import React, { useState } from 'react'

const SignUp = () => {
    let [form, setForm] = useState({})
    let [disc, setDisc] = useState('')
    console.log(Object.keys(form));
    const handleForm = (e)=>{
        setForm((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleSignUp = (e)=>{ 
        e.preventDefault()
        if(Object.keys(form).length<6){
            setDisc('Please enter all values!')
        }else{
            setDisc(JSON.stringify(form))
        }
    }
  return (
    <div>
        <h1>Sign up form</h1>
        <form>
            <div className="form-group">
                <label >First Name</label>
                <input type="text" className="form-control" id="first_name" name="first_name" onChange={handleForm} placeholder="Enter First Name."/>
            </div>
            <div className="form-group">
                <label >Last Name</label>
                <input type="text" className="form-control" id="Last-Name" name="Last-Name" onChange={handleForm} placeholder="Enter Last Name."/>
            </div>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={handleForm} placeholder="Enter Email address."/>
            </div>
            <div className="form-group">
                <label >Address</label>
                <input type="text" className="form-control" id="address" name="address" onChange={handleForm} placeholder="Enter address."/>
            </div>  
            <div className="form-group">
                <label >PAN number</label>
                <input type="text" className="form-control" id="pan" name="pan" onChange={handleForm} placeholder="Enter PAN number."/>
            </div>  
            <div className="form-group">
                <label >password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={handleForm} placeholder="Enter password."/>
            </div>
            <button type="button" className="btn btn-info" onClick={handleSignUp}>Sign UP!</button>
        </form>
        <p>{disc}</p>
    </div>
    )
}

export default SignUp