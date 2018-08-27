import React from 'react';

class Restaurant extends React.Component {
// render for each restaurant
    render() {
        return (
            <li 
            role="button" 
            className="restaurant" 
            tabIndex="0" 
            onKeyPress={this.props.openInfoWindow.bind(this, this.props.data.marker)}
             onClick={this.props.openInfoWindow.bind(this, this.props.data.marker)}>
             {this.props.data.longname}
             </li>
        );
    }
}

export default Restaurant;