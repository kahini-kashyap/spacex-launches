import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Launches(props) {
    return (
        <>
            <br/>
            <h3 id="data">{props.name}</h3>
            <h4 id="data">{props.details}</h4>
            <h4 id="data">Launching Date: {props.date}</h4>
            <br /><br /><hr />
        </>
    )
}

export default Launches;