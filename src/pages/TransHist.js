import React from 'react'

const TransHist = () => {
    return (
        <div>
            <h6 className='ms-5 mt-3'>TRANSACTION HISTORY</h6>
            <table class="table table-striped table-borderless mx-auto mt-4" style={{ width: "90%" }}>
                <thead>
                    <tr>
                        <th scope="col">Stock</th>
                        <th scope="col">Bought/Sold</th>
                        <th scope="col">No. of Stocks</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>fat</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mdo</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>twitter</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mdo</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>twitter</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TransHist