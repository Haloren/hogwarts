import React, {Component} from 'react';

export default class HogCard extends Component {



    render(){
        const {name} = this.props

        console.log(this.props)
        return (
            <div className="ui eight wide column">
                <div className="pigTile">
                    {/* <h3>Hog Card</h3> */}
                    <h3> {name} </h3>
                </div>
            </div>
        )
    }

}
