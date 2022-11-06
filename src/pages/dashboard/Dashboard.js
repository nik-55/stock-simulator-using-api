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
            const res4 = await basicAxios.post("/trading/getstock/", {
                jwt_token: localStorage.getItem("jwt_token")
            })
            console.log(res1.data.balance);
            console.log(res3, res4);
            setBalance(res1.data.balance)
            setBookarr(res2.data)
        }
        func()
    }, [])
    return (
        <div className='dashbrd-container bd'>
            <div className='box-1 bd-n'>
                <Bar className='mx-auto' data={{
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

            <div className='box-2 bd'>

                <div className='wid-50 hei-100 bd-n'>

                    <div className='d-flex wid-100 hei-50'>

                        <div className='wid-50 hei-100 change d-flex flex-column justify-content-center align-items-center'>
                            <b>Net Profit/Loss</b>
                            <span className='text-success'>{`+ INR 400k`}</span>
                        </div>
                        <div className='wid-50 hei-100 d-flex flex-column justify-content-center align-items-center available-fund'>
                            <b>Available Funds</b>
                            <span>{`INR ${balance}k`}</span>
                        </div>
                    </div>

                    <div className='wid-100 hei-50 d-flex flex-column justify-content-center align-items-center'>
                        <b>Bookmark Stocks</b>
                        <div className="wid-100 d-flex flex-column justify-content-center align-items-center">
                            {bookarr.map((stk) => {
                                return <div key={stk.stock_name} className='bookmark-item d-flex'>
                                    <span className=''>{stk.stock_name}</span>
                                    <span className=''>{`INR ${stk.stock_price}k`}</span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

                <div className='wid-50 hei-100 bd d-flex flex-column align-items-center'>
                    <b>Stocks Distribution</b>
                    <div className='wid-100'>
                        <Pie className='mx-auto' data={{
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