import React, { useEffect, useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import "./dashboard.css"
import { basicAxios } from "../../api/customAxios"

const Dashboard = () => {
    const [balance, setBalance] = useState("")
    const [bookarr, setBookarr] = useState([])
    // const [change, setChange] = useState()
    useEffect(() => {
        const func = async () => {
            const res1 = await basicAxios.post("/trading/getbalance/", {
                jwt_token: localStorage.getItem("jwt_token")
            })
            const res2 = await basicAxios.post("/trading/getbookmark/", {
                jwt_token: localStorage.getItem("jwt_token")
            })
            const res3 = await basicAxios.post("/trading/gettransaction/", {
                jwt_token: localStorage.getItem("jwt_token")
            })
            console.log(res3);
            setBalance(res1.data.balance)
            setBookarr(res2.data)
        }
        func()
    }, [])
    return (
        <div className='mx-auto m-3 dashbrd-container'>
            <div className='box-1 w-100 h-50'>
                <Bar className='mx-auto w-50 h-100' data={{
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 100],
                        backgroundColor: "#F5D699"
                    }]
                }} options={{ maintainAspectRatio: false }} />
            </div>
            <div className='h-50 box-2'>
                <div className='w-50'>
                    <div className='d-flex w-100 '>
                        <div className='flex-grow-1 m-2 change d-flex flex-column justify-content-center align-items-center'>
                            <b>Net Profit/Loss</b>
                            <span className='text-success'>{`+ INR 400k`}</span>
                        </div>
                        <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center m-2 available-fund'>
                            <b>Available Funds</b>
                            <span>{`INR ${balance}k`}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center w-100 h-50'>
                        <b>Bookmark Stocks</b>
                        <div className="bookmark-cont d-flex flex-column justify-content-center align-items-center">
                            {bookarr.map((stk) => {
                                return <div key={stk.stock_name} className='d-flex p-1'>
                                    <span className='flex-grow-1 ms-1'>{stk.stock_name}</span>
                                    <span className='me-1'>{`INR ${stk.stock_price}k`}</span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className='w-50 d-flex align-items-center flex-column'>
                    <b>Stocks Distribution</b>
                    <div className='w-50'>
                        <Pie className='w-100 h-75' data={{
                            labels: [
                                'Red',
                                'Blue',
                                'Yellow'
                            ],
                            datasets: [{
                                label: 'My First Dataset',
                                data: [300, 50, 100],
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(54, 162, 235)',
                                    'rgb(255, 205, 86)'
                                ],
                                hoverOffset: 4
                            }]
                        }} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard