import React from 'react'
import about_img from "../assests/images/about_img.png"

const Aboutus = () => {
    return (
        <div className='about-div d-flex flex-column'>
            <div className='upper-div d-flex align-items-center'>
                <img src={about_img} alt="about" className="about-img rounded-circle p-2 ms-5 me-5" />
                <div className='about-content p-5'>
                    <h5>About us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='about-footer d-flex flex-column align-items-center'>
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Roorkee , Uttarakhand, India</p>
                <p><i className="fas fa-phone mr-3"></i> + 789 790 9087</p>
            </div>
        </div>
    )
}

export default Aboutus