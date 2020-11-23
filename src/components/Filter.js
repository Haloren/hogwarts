import React from 'react'

export default function Filter(props) {
    const {isGreased, weightSort, weightToggle, greasedToggle} = props

    console.log(props)

    return (
        <nav className="filterWrapper">
            <button onClick={greasedToggle}> {isGreased ? "Show All" : "Show Greased"} </button>
            <button onClick={weightToggle}> {weightSort ? "Sort by Name": "Sort by Weight"} </button>
        </nav>
    )
}