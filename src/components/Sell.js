import React from 'react'
import { basicAxios } from '../api/customAxios'

const Sell = () => {
    const sold = async (e) => {
        e.preventDefault()
        const res = await basicAxios.post("/trading/sell/", {
            jwt_token: localStorage.getItem("jwt_token"),
            stock_price: 200,
            stock_name: "tata steel",
            stock_quantity: 100
        })
        console.log(res);
    }
    return (
        <form onSubmit={sold} noValidate>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="sell-price" placeholder="Price" />
                <label forhtml="sell-price">Price</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="sell-quantity" placeholder="Quantity" />
                <label forhtml="sell-quantity">Quantity</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="sell-invest-amount" placeholder="Investment Amount" />
                <label forhtml="sell-invest-amount">Investment Amount</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="sell-question" placeholder="Why I sold this Stock?" />
                <label forhtml="sell-question">Why I sold this Stock?</label>
            </div>
            <div className="modal-footer border-0">
                <button className='btn sell-btn'>Sell</button>
            </div>
        </form>
    )
}

export default Sell