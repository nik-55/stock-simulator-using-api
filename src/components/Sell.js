import React, { useState } from 'react'
import { basicAxios } from '../api/customAxios'
import Success from "../components/Success"

const Sell = ({ stock }) => {
    const [quantity, setQuan] = useState("0")
    const [amount, setAmount] = useState("0")
    const [show, setShow] = useState(false)

    const sold = async (e) => {
        e.preventDefault()
        try {
            await basicAxios.post("/trading/sell/", {
                jwt_token: localStorage.getItem("jwt_token"),
                stock_name: stock.stockname,
                stock_quantity: parseInt(quantity),
                stock_price: parseFloat(stock.price),
            })
            setShow(true)
        }
        catch {
            console.log("error");
        }
    }
    return (
        <form onSubmit={sold} noValidate>
            {show && <Success success_text={"Sold"} />}
            <div className="form-floating mb-3">
                <input readOnly={true} value={stock.price} type="text" className="form-control" id="sell-price" placeholder="Price" />
                <label forhtml="sell-price">Price</label>
            </div>
            <div className="form-floating mb-3">
                <input value={quantity} onChange={(e) => {
                    setQuan(e.target.value);
                    const am = (parseFloat(stock.price) * parseInt((e.target.value) || "0")).toString()
                    setAmount(am)
                }} type="text" className="form-control" id="sell-quantity" placeholder="Quantity" />
                <label forhtml="sell-quantity">Quantity</label>
            </div>
            <div className="form-floating mb-3">
                <input readOnly={true} value={amount} type="text" className="form-control" id="sell-invest-amount" placeholder="Investment Amount" />
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