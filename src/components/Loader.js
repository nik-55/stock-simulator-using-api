import React from 'react'
import loader from "../assests/animations/loader.gif"

const Loader = () => {
    return (
        <div className='d-flex justify-content-center mt-5' style={{ height: "100%" }}>
            <img src={loader} className="my-auto" style={{ height: "100px" }} alt="Loader" />
        </div>
    )
}

export default Loader