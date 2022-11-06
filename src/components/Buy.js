import React, { useState } from 'react'
import { basicAxios } from "../api/customAxios"
import Success from "../components/Success"

const Buy = ({ stock }) => {
    const [quantity, setQuan] = useState("0")
    const [amount, setAmount] = useState("0")
    const [show, setShow] = useState(false)

    const bought = async (e) => {
        e.preventDefault()
        try {
            const res = await basicAxios.post("/trading/buy/", {
                jwt_token: localStorage.getItem("jwt_token"),
                stock_price: parseFloat(stock.price),
                stock_name: stock.stockname,
                stock_quantity: parseInt(quantity)
            })
            setShow(true)
            console.log(res);
        }
        catch {
            console.log("error");
        }
    }
    return (
        <form onSubmit={bought} noValidate>
            {show && <Success success_text={"Sold"} />}
            <div className="form-floating mb-3">
                <input type="text" value={stock.price} className="form-control" id="buy-price" placeholder="Price" readOnly={true} />
                <label forhtml="buy-price">Price</label>
            </div>
            <div className="form-floating mb-3">
                <input value={quantity} onChange={(e) => {
                    setQuan(e.target.value);
                    const am = (parseFloat(stock.price) * parseInt((e.target.value) || "0")).toString()
                    setAmount(am)
                }} type="text" className="form-control" id="buy-quantity" placeholder="Quantity" />
                <label forhtml="buy-quantity">Quantity</label>
            </div>
            <div className="form-floating mb-3">
                <input value={amount} readOnly={true} type="text" className="form-control" id="buy-invest-amount" placeholder="Investment Amount" />
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