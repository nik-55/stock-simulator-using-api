import React from 'react'
import "./stockAnalysis.css"
import stock_img from "../../assests/images/stock_img.png"

const StockAnalysis = () => {
    return (
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
                <button className='btn m-2 buy-btn'>Buy</button>
                <button className='btn m-2 sell-btn'>Sell</button>
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
    )
}

export default StockAnalysis