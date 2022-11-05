import React from 'react'

const Sell = () => {
    const sold = (e) => {
        e.preventDefault()
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