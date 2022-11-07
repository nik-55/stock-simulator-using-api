import React from 'react'
import { Bar } from 'react-chartjs-2'

const MyBar = () => {
    return (
        <>
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
        </>
    )
}

export default MyBar