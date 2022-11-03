import React, { useState } from 'react'
import "./home.css"
import home_img from "../../assests/images/home_img.png"
import Modal from '../../components/modals/Modal'
import Signup from "../../components/signup/Signup"
import Login from "../../components/login/Login"

const Home = () => {
    const [sing, setSing] = useState(true)

    return (
        <>
            {sing ? <Modal modal_body={<Signup />} modal_title={"Register"} /> :
                <Modal modal_body={<Login />} modal_title={"Login"} />}
            <div className='home-container'>
                <div className='box box-1'>
                    <div className="card c-card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button onClick={() => setSing(true)} className="btn c-btn me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Signup</button>
                            <button onClick={() => setSing(false)} className="btn c-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                        </div>
                    </div>
                </div>
                <div className='box box-2'>
                    <img src={home_img} className="promotion-img" alt='promotion-img' />
                </div>
            </div>
        </>
    )
}

export default Home