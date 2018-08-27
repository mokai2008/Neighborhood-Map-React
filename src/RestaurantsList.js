import React, {Component} from 'react';
import Restaurant from './Restaurant';

class RestaurantsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'locations': '',
            'query': '',
            'suggestions': true,
        };

        this.filterLocations = this.filterLocations.bind(this);
        this.toggleSuggestions = this.toggleSuggestions.bind(this);
    }

    // Show the restaurants according to search field

    filterLocations(event) {
        this.props.closeInfoWindow();
        const {value} = event.target;
        let locations = [];
        this.props.alllocations.forEach(function (location) {
            if (location.longname.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                location.marker.setVisible(true);
                locations.push(location);
            } else {
                location.marker.setVisible(false);
            }
        });

        this.setState({
            'locations': locations,
            'query': value
        });
    }

    componentWillMount() {
        this.setState({
            'locations': this.props.alllocations
        });
    }

    // Toggling button for showing/hiding Restaurans

    toggleSuggestions() {
        this.setState({
            'suggestions': !this.state.suggestions
        });
    }

    // Showing the Restaurants List

    render() {
        let locationlist = this.state.locations.map(function (listItem, index) {
            return (
                <Restaurant key={index} openInfoWindow={this.props.openInfoWindow.bind(this)} data={listItem}/>
            );
        }, this);

        return (
            <div className="search">
                <input
                  id="search-field" 
                  role="search"
                  aria-labelledby="filter" 
                  type="text" 
                  placeholder="Filter"
                  value={this.state.query} 
                  onChange={this.filterLocations}/>
                <ul>
                    {this.state.suggestions && locationlist}
                </ul>
                <button className="button" onClick={this.toggleSuggestions}>Show/Hide Suggestions</button>
            </div>
        );
    }
}

export default RestaurantsList;