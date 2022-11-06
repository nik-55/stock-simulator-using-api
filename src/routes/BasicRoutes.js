import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Dashboard from "../pages/dashboard/Dashboard"
import Transactions from '../pages/Transactions'
import StockWindow from '../pages/StockWindow'
import Aboutus from '../pages/Aboutus'
import PrivateRoute from "./PrivateRoute"
import RedirectDash from './RedirectDash'

const BasicRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<RedirectDash><Home /></RedirectDash>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='/stockwindow' element={<PrivateRoute><StockWindow /></PrivateRoute>} />
            <Route path='/transactions' element={<PrivateRoute><Transactions /></PrivateRoute>} />
            <Route path='/aboutus' element={<Aboutus />} />
        </Routes>
    )
}

export default BasicRoutes