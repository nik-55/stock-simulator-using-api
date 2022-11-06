import React from 'react'
import { basicAxios } from "../api/customAxios"

const Buy = () => {
    const bought = async (e) => {
        e.preventDefault()
        const res = await basicAxios.post("/trading/buy/", {
            jwt_token: localStorage.getItem("jwt_token"),
            stock_price: 200,
            stock_name: "tata steel",
            stock_quantity: 100
        })
        console.log(res);
    }
    return (
        <form onSubmit={bought} noValidate>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="buy-price" placeholder="Price" />
                <label forhtml="buy-price">Price</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="buy-quantity" placeholder="Quantity" />
                <label forhtml="buy-quantity">Quantity</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="buy-invest-amount" placeholder="Investment Amount" />
                <label forhtml="buy-invest-amount">Investment Amount</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="buy-question" placeholder="Why I bought this Stock?" />
                <label forhtml="buy-question">Why I bought this Stock?</label>
            </div>
            <div className="modal-footer border-0">
                <button className='btn buy-btn'>Buy</button>
            </div>
        </form>
    )
}

export default Buy