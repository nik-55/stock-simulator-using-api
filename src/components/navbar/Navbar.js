import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark cnavbar">
                <div className="d-flex w-100 align-items-center">
                    <div className='flex-grow-1 d-flex ms-3'>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <h4 className='my-auto ms-2'><Link className='orgname' to={"/"}>Paper Trading</Link></h4>
                    </div>
                    <span className='me-3'>Name<i className="ms-3 fa-solid fa-user"></i></span>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" style={{ backgroundColor: "#321570" }} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"><NavLink className={"orgname"} to={"/"}>Paper Trading</NavLink></h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body canvas-bg">
                    <div className="mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><NavLink to={"/dashboard"}><i className="fa-brands fa-instagram me-2"></i>Dashboard</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/stockwindow"}><i className="fa-brands fa-instagram me-2"></i>Stock Window</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/transactions"}><i className="fa-brands fa-instagram me-2"></i>Transactions</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/aboutus"}><i className="fa-brands fa-instagram me-2"></i>About us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar