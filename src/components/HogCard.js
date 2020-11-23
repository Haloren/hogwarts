import React, {Component} from 'react';
import HogCardFront from './HogCardFront'
import HogCardBack from './HogCardBack'

export default class HogCard extends Component {
    state = {
        clicked: false
    }

    onClick = () => this.setState({clicked: !this.state.clicked})

    render(){
        const {state, props, onClick} = this
        const {name} = props
        // console.log(this.props)
        // const {name} = this.props

        return (
            <div className="ui eight wide column" onClick={onClick}>
                {/* <div className="pigTile"> */}
                    {/* <h3>Hog Card</h3> */}
                    {/* <h3> {name} </h3> */}
                    {/* <HogCardFront name={name}/>
                    <HogCardBack name={name} /> */}
                    {state.clicked ? <HogCardBack { ...props } /> : <HogCardFront name={name} /> }
                {/* </div> */}
            </div>
        )
    }

}
