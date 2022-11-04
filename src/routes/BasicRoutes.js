import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AskAuth from '../pages/home/Home'
import Dashboard from "../pages/dashboard/Dashboard"
import StockAnalysis from '../components/stockAnalysis.js/StockAnalysis'

const BasicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AskAuth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/financials' element={<StockAnalysis />} />
        </Routes>
    )
}

export default BasicRoutes