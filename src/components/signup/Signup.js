import React from 'react'
import "./signup.css"

const Signup = () => {
    const register = (e) => {
        e.preventDefault()
        console.log("signup....");
    }
    return (
        <>
            <form onSubmit={register} noValidate>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="signupEmail" placeholder="name@example.com" />
                    <label forhtml="signupEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="signupUsername" placeholder="Username" />
                    <label forhtml="signupUsername">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                    <label forhtml="signupPassword">Password</label>
                </div>
                <div className="modal-footer border-0">
                    <button className='btn btn-primary'>Signup</button>
                </div>

            </form>
        </>
    )
}

export default Signup