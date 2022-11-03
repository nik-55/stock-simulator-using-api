import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark cnavbar">
                <div className="container-fluid">
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span>Name<i className="ms-3 fa-solid fa-user"></i></span>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"><NavLink to={"/"}>OrgName</NavLink></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body canvas-bg">
                    <div className="mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><NavLink to={"/dashboard"}><i className="fa-brands fa-instagram me-2"></i>Dashboard</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/chart"}><i className="fa-brands fa-instagram me-2"></i>Chart</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/company"}><i className="fa-brands fa-instagram me-2"></i>Company</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/financials"}><i className="fa-brands fa-instagram me-2"></i>Financials</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar