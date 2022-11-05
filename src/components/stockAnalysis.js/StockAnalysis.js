import React, { useState } from 'react'
import "./stockAnalysis.css"
import stock_img from "../../assests/images/stock_img.png"
import Buy from "../Buy"
import Sell from "../Sell"
import Modal from "../modals/Modal"

const StockAnalysis = () => {
    const [buy_modal, setBuy_modal] = useState(true)
    return (
        <>
            {buy_modal ? <Modal modal_body={<Buy />} modal_title={"Buy Stock"} /> :
                <Modal modal_body={<Sell />} modal_title={"Sell Stock"} />}

            <div className='stock-anlys m-4'>

                <form className="d-flex justify-content-center w-100" role="search">
                    <input className="form-control w-50 srch-inp" type="search" placeholder="Search" aria-label="Search" />
                    <button className="fa-solid fa-magnifying-glass srch-btn p-2" type="submit"></button>
                </form>

                <div className='w-100 d-flex mt-2'>
                    <div className='flex-grow-1 my-auto d-flex'>
                        <img src={stock_img} className="stock-img" alt="stock-brand" />
                        <h4 className='ms-2'>STOCK NAME</h4>
                    </div>
                    <button onClick={() => setBuy_modal(true)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn m-2 buy-btn'>Buy</button>
                    <button onClick={() => setBuy_modal(false)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn m-2 sell-btn'>Sell</button>
                </div>

                <div className='w-100 d-flex'>
                    <div className='flex-grow-1 my-auto d-flex flex-column'>
                        <h4 className='ms-2'>INR 300K</h4>
                        <span className='ms-2 text-success'>+ INR 20K</span>
                    </div>
                    <button className='btn my-auto h-50 btn-outline-dark m-2'>Bookmark<i className="ms-1 fa-regular fa-bookmark"></i></button>
                </div>

                <div className='bd-n w-100 mt-3'>
                    Graph
                </div>

            </div>
        </>
    )
}

export default StockAnalysis