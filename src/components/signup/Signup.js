import React, { useRef, useState } from 'react'
import "./signup.css"
import { basicAxios } from '../../api/customAxios'

const Signup = () => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const cpasswordRef = useRef()
    const [error, setError] = useState("")

    const register = async (e) => {
        e.preventDefault()
        const password = passwordRef.current.value
        const cpassword = cpasswordRef.current.value
        try {
            if (password !== cpassword)
                throw new Error("Password and Confirm Password should be same")

            const res = await basicAxios.post("/accounts/register/", {
                username: usernameRef.current.value,
                password,
                email: emailRef.current.value
            })
            console.log(res);
        }
        catch (err) {
            setError(err?.message || "Signup failed")
        }
    }
    return (
        <>
            {error !== "" && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}

            <form onSubmit={register} noValidate>
                <div className="form-floating mb-3">
                    <input ref={emailRef} type="email" className="form-control" id="signupEmail" placeholder="name@example.com" />
                    <label forhtml="signupEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input ref={usernameRef} type="text" className="form-control" id="signupUsername" placeholder="Username" />
                    <label forhtml="signupUsername">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input ref={passwordRef} type="password" className="form-control" id="signupPassword" placeholder="Password" />
                    <label forhtml="signupPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input ref={cpasswordRef} type="password" className="form-control" id="signupCPassword" placeholder="Confirm Password" />
                    <label forhtml="signupCPassword">Confirm Password</label>
                </div>
                <div className="modal-footer border-0">
                    <button className='btn btn-primary'>Signup</button>
                </div>

            </form>
        </>
    )
}

export default Signup