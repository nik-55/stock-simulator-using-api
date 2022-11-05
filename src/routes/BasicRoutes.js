import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AskAuth from '../pages/home/Home'
import Dashboard from "../pages/dashboard/Dashboard"
import StockAnalysis from '../components/stockAnalysis.js/StockAnalysis'
import TransHist from '../pages/TransHist'

const BasicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AskAuth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/financials' element={<StockAnalysis />} />
            <Route path='/company' element={<TransHist />} />
        </Routes>
    )
}

export default BasicRoutes