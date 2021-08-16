import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Launches from './Launches.jsx'

var ayush = "codingzen"

fetch("https://api.spacexdata.com/v4/launches/upcoming").then(function (res) {
    return (res.json())
}).then(function (res2) {
    ReactDOM.render(<><Header />
        {
            res2.map(function (val) {
                if (val.details == null) {
                    val.details = "No details available about this mission"
                }
                return (
                    <Launches name={val.name} details={val.details} date={val.date_local} />
                )
            })

        }
        <Footer /></>, document.getElementById("root"))
})