import React from 'react'

export default function HogCardFront (props) {
    // console.log(props)

    // PULL IN FILES FROM LOCAL ASSETS (make sure to use require())
    let pigImage = require("../hog-imgs/" + props.name
        .toLowerCase()
        .split(" ")
        .join("_") + ".jpg"
    )
    // console.log(pigImage)

    return(
        // <div>
        //     {props.name} Front Image
        // </div>
        <div className="pigTile">
            <h3> {props.name} </h3>
            <img src={pigImage} alt="Pig" />
        </div>
    )
}