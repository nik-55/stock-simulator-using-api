import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AskAuth from '../pages/home/Home'
import Dashboard from "../pages/dashboard/Dashboard"

const BasicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AskAuth />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default BasicRoutes