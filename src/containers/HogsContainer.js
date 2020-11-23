import React from 'react';
import HogCard from '../components/HogCard';

export default function HogsContainer (props) {
    console.log(props)

    // const renderHogs = () => props.hogs.map(hog => <HogCard hog={hog}/>)
    const renderHogs = () => props.hogs.map(hog => <HogCard {...hog}/>)

    return(
        <div className="ui grid container">
            {/* <h1>Hogs Container</h1> */}
            {/* <HogCard /> */}
            {renderHogs()}
        </div>
    )
}