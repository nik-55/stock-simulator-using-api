import React, { useState } from 'react'
import "./stockAnalysis.css"
import stock_img from "../../assests/images/stock_img.png"
import Buy from "../Buy"
import Sell from "../Sell"
import Modal from "../modals/Modal"
import { Line } from 'react-chartjs-2';
import { basicAxios } from '../../api/customAxios'

const graph_options = {
    scales: {
        y: {
            ticks: {
                callback: function (value, index, ticks) {
                    return '$' + value;
                }
            },
            grid: {
                borderColor: "white",
                color: "rgb(255, 255, 255)",
                lineWidth: 0.1
            }
        },
        x: {
            grid: {
                borderColor: "white",
                color: "rgb(255, 255, 255)",
                lineWidth: 0.1
            }
        }
    },
    plugins: {
        legend: {
            position: "bottom"
        }
    }
}

const StockAnalysis = ({ stock }) => {
    const [buy_modal, setBuy_modal] = useState(true)
    const [bookmarked, setBookmarked] = useState(false)

    const bookmark = async () => {
        await basicAxios.post("/trading/bookmark/", {
            jwt_token: localStorage.getItem("jwt_token"),
            stock_name: stock.stockname,
            stock_price: 100//parseFloat(stock.price)
        })
        setBookmarked(true)
    }

    return (
        <>
            {buy_modal ? <Modal modal_body={<Buy stock={stock} />} modal_title={"Buy Stock"} /> :
                <Modal modal_body={<Sell stock={stock} />} modal_title={"Sell Stock"} />}

            <>
                <div className='w-100 d-flex mt-2'>
                    <div className='flex-grow-1 my-auto d-flex'>
                        <img src={stock_img} className="stock-img" alt="stock-brand" />
                        <h4 className='ms-2'>{stock.stockname}</h4>
                    </div>
                    <button onClick={() => setBuy_modal(true)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn m-2 buy-btn'>Buy</button>
                    <button onClick={() => setBuy_modal(false)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn m-2 sell-btn'>Sell</button>
                </div>

                <div className='w-100 d-flex'>
                    <div className='flex-grow-1 my-auto d-flex flex-column'>
                        <h4 className='ms-2'>{`INR ${stock.price}K`}</h4>
                        {stock.change >= 0 ? <span className='ms-2 text-success'>{`+ INR ${stock.change}K`}</span> :
                            <span className='ms-2 text-danger'>{`- INR ${-stock.change}K`}</span>}
                    </div>
                    {bookmarked ? <button onClick={bookmark} className='btn my-auto h-50 btn-dark text-light m-2'>Bookmarked<i className="ms-1 fa-regular fa-bookmark"></i></button> : <button onClick={bookmark} className='btn my-auto h-50 btn-outline-dark m-2'>Bookmark<i className="ms-1 fa-regular fa-bookmark"></i></button>}
                </div>
                <div className='m-3 stock-graph p-5'>
                    <Line data={{
                        labels: stock.labels,
                        datasets: [{
                            label: 'Opening Prices',
                            data: stock.prices,
                            backgroundColor: "#F9A785",
                            borderColor: "#F9A785",
                            fill: {
                                target: 'origin',
                                above: 'rgb(249, 167, 133, 0.2)'
                            }
                        }]
                    }} options={graph_options} />
                </div></>
        </>
    )
}

export default StockAnalysis