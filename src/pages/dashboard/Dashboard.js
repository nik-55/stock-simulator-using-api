import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import { basicAxios } from "../../api/customAxios"
import MyPie from './MyPie'
import MyBar from './MyBar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { profile_options } from '../../constants/rapid_const'

const Dashboard = () => {
    const [balance, setBalance] = useState("")
    const [bookarr, setBookarr] = useState([])
    const [pieData, setPieData] = useState()
    const [loading, setLoading] = useState(true)
    const [change, setChange] = useState(0)
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
            let prev_wealth = 0, current_wealth = 0;
            for (let i = 0; i < res4.data.length; i++) {
                prev_wealth += (parseFloat(res4.data[i].stock_price) * (parseInt(res4.data[i].stock_quantity)))
                const options = { ...profile_options, params: { ...profile_options.params, symbol: res4.data[i].stock_name } }
                const response = await axios.request(options)
                current_wealth += (parseFloat(response.data.price.regularMarketOpen.raw) * (parseInt(res4.data[i].stock_quantity)))
            }
            let del = prev_wealth - current_wealth
            del = Math.round(del * 100) / 100;
            setChange(del)

            setBalance(res1.data.balance)
            setBookarr(res2.data)
            const arr = res4.data.map((ele) => { return ele.stock_quantity })
            const arr2 = res4.data.map((ele) => { return ele.stock_name })
            setPieData({ data: arr, labels: arr2 })
            setLoading(false)
        }
        func()
    }, [])
    return (
        <div className='dashbrd-container bd'>
            <div className='box-1 bd-n'>
                <MyBar />
            </div>

            <div className='box-2 bd'>

                <div className='wid-50 hei-100 bd-n'>

                    <div className='d-flex wid-100 hei-50'>

                        <div className='wid-50 hei-100 change d-flex flex-column justify-content-center align-items-center'>
                            <b>Net Profit/Loss</b>
                            {change >= 0 ? <span className='text-success'>{`+ INR ${change}k`}</span> :
                                <span className='text-danger'>{`- INR ${-change}k`}</span>}
                        </div>
                        <div className='wid-50 hei-100 d-flex flex-column justify-content-center align-items-center available-fund'>
                            <b>Available Funds</b>
                            <span>{`INR ${balance}k`}</span>
                        </div>
                    </div>

                    <Link to="/bookmark"><div className='wid-100 hei-50 d-flex flex-column justify-content-center align-items-center'>
                        <b>Bookmark Stocks</b>
                        <div className="wid-100 d-flex flex-column justify-content-center align-items-center">
                            {bookarr.filter((ele, i) => {
                                if (i < 3) return true
                                return false
                            }).map((stk) => {
                                return <div key={stk.stock_name} className='bookmark-item d-flex'>
                                    <span className=''>{stk.stock_name}</span>
                                    <span className=''>{`INR ${stk.stock_price}k`}</span>
                                </div>
                            })}
                        </div>
                    </div></Link>
                </div>

                <div className='wid-50 hei-100 bd d-flex flex-column align-items-center'>
                    <b>Stocks Distribution</b>
                    <div className='wid-100'>
                        {!loading && <MyPie pieData={pieData} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard