import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import "./dashboard.css"

const Dashboard = () => {
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
                            <span>{`INR 400k`}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center w-100 h-50'>
                        <b>Bookmark Stocks</b>
                        <div className="bookmark-cont d-flex flex-column justify-content-center align-items-center">
                            <div className='d-flex p-1'>
                                <span className='flex-grow-1 ms-1'>Tata</span>
                                <span className='me-1'>{`INR 400k`}</span>
                            </div>
                            <div className='d-flex p-1'>
                                <span className='flex-grow-1 ms-1'>Tata</span>
                                <span className='me-1'>{`INR 400k`}</span>
                            </div>
                            <div className='d-flex p-1'>
                                <span className='flex-grow-1 ms-1'>Tata</span>
                                <span className='me-1'>{`INR 400k`}</span>
                            </div>
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