import React, { useState } from 'react'
import StockAnalysis from '../components/stockAnalysis.js/StockAnalysis'
import stock_window_img from "../assests/images/stock_window_img.svg"

const StockWindow = () => {
    const [show, setShow] = useState(true)
    const handleSearch = (e) => {
        e.preventDefault()
        setShow(false)
    }
    return (
        <div className='stock-anlys m-4'>
            <form className="d-flex justify-content-center w-100" role="search">
                <input className="form-control w-50 srch-inp" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={handleSearch} className="ms-1 fa-solid fa-magnifying-glass srch-btn p-2" type="submit"></button>
            </form>
            {show ? <img className='mt-1' style={{ width: "35%" }} alt="stock window" src={stock_window_img} /> : <StockAnalysis />}
        </div>
    )
}

export default StockWindow