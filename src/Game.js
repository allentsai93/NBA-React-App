import React, { Component } from 'react';

class Game extends Component {
    render() {
    const divStyle = {
        textAlign: 'center',
        width: '50%',
        margin: '0 auto',
        float: 'left',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.15)'

    }
        return (
            <div style={divStyle}>
                <h1>{this.props.home} vs {this.props.away}</h1>
                <h2>{this.props.hscore} to {this.props.vscore}</h2>
            </div>
        )
    }
}

export default Game;