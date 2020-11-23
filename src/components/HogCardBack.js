import React from 'react'

export default function HogCardBack (props) {
    console.log(props)

    const {name, greased, specialty, weight} = props

    return(
        <div className="pigTile">
            <h3> {name} </h3>
            <hr></hr>
            <p className="hoggyText"> {specialty} </p>
            <h3> {greased ? "Can't catch me" : "Non Slip" }</h3>
            <p className="hoggyText"> Weight: { weight } </p>
            {/* IF THE KEY IS A STRING USE BRACKET NOTATION */}
            <p className="achievementText"> Medal: { props["highest medal achieved"] } </p>
            <hr></hr>
        </div>
    )

}