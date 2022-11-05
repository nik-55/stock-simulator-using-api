import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AskAuth from '../pages/home/Home'
import Dashboard from "../pages/dashboard/Dashboard"
import Transactions from '../pages/Transactions'
import StockWindow from '../pages/StockWindow'
import Aboutus from '../pages/Aboutus'

const BasicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AskAuth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/stockwindow' element={<StockWindow />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/aboutus' element={<Aboutus />} />
        </Routes>
    )
}

export default BasicRoutes