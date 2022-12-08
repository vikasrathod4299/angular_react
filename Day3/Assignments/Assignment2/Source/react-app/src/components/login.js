import React, { useState } from 'react'

const Login = () => {
    let [username,setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [errMsg, setErrMsg] = useState('')

    const handleLogin = (e)=>{
        e.preventDefault();

        if(username!=='' && password!==''){
            if(username==='admin' && password==='admin'){
                setErrMsg(`${username} is logged in`)
            }
            else{
                
                setErrMsg(`${username} is not registerd`)
            }
        }
        else{
            setErrMsg(`Enter values!`)
        }
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form>
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control" id="username" name="username" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter username."/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password."/>
                </div>
                <button type="button" className="btn btn-info" onClick={handleLogin}>Login!</button>
            </form>
            <p>
            {errMsg }
            </p>
        </div>
    )
}

export default Login