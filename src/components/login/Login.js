import React from 'react'
import "./login.css"

const Login = () => {
    const signin = (e) => {
        e.preventDefault()
        console.log("Logging...");
    }
    return (
        <>
            <form onSubmit={signin} noValidate>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="loginUsername" placeholder="Username" />
                    <label forhtml="loginUsername">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                    <label forhtml="signupPassword">Password</label>
                </div>
                <div className="modal-footer border-0">
                    <button className='btn btn-primary'>Login</button>
                </div>
            </form>
        </>
    )
}

export default Login