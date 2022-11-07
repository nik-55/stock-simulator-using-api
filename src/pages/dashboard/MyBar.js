import React from 'react'
import { Line } from 'react-chartjs-2'

const MyBar = ({ lineData }) => {

    return (
        <>
            <Line data={{
                labels: lineData.labels,
                datasets: [{
                    label: 'Opening Prices',
                    data: lineData.data,
                    backgroundColor: "#F9A785",
                    borderColor: "#F9A785",
                    fill: {
                        target: 'origin',
                        above: 'rgb(249, 167, 133, 0.2)'
                    }
                }]
            }} options={{
                maintainAspectRatio: false
            }} />
        </>
    )
}

export default MyBar