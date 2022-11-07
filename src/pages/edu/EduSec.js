import React from 'react'
import "./edu.css"
import { arr } from "../../constants/educonstants"

const EduSec = () => {
    return (
        <div className='edu-cont'>
            {arr.map((ele) => {
                return <a href={ele.card_link} className="card bg-success c-card m-2 text-light">
                    <div className="card-body">
                        <h5 className="card-title">{ele.card_title}</h5>
                        <p className="card-text">{ele.card_body}</p>
                    </div>
                </a>
            })}
        </div>
    )
}

export default EduSec