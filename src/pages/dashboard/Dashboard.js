import React from 'react'
import "./dashboard.css"

const Dashboard = () => {
    return (
        <div className='mx-auto m-3 dashbrd-container bd'>
            <div className='bd box box-1'>dashboard</div>
            <div className='bd box box-2'>
                <div className='bd-n flex-grow-1'>
                    <div className='bd d-flex w-100 h-50'>
                        <div className='bd-n flex-grow-1 m-2'>dashboard</div>
                        <div className='bd-n flex-grow-1 m-2'>dashboard</div>
                    </div>
                    <div className='bd w-100 h-50'>dashboard</div>
                </div>
                <div className='bd-n box box-2'>dashboard</div>
            </div>
        </div>
    )
}

export default Dashboard