import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark cnavbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span>Name<i className="ms-3 fa-solid fa-user"></i></span>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">OrgName</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body canvas-bg">
                    <div className="mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><NavLink to={"/"}><i className="fa-brands fa-instagram me-2"></i>An item</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/a"}><i class="fa-brands fa-instagram me-2"></i>A second item</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/b"}><i className="fa-brands fa-instagram me-2"></i>A third item</NavLink></li>
                            <li className="list-group-item"><NavLink to={"/c"}><i className="fa-brands fa-instagram me-2"></i>A fourth item</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar