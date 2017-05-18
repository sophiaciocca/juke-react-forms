/*
QUESTIONS
1: Why do we need to send back handleChange back to FilterInput? isn't that just the search bar?

*/
import React, { Component } from 'react';
import FilterInput from '../components/FilterInput.js';
import Artists from '../components/Artists.js';

export default class FilterableArtistsContainer extends Component {

    constructor() {
        super();

        this.state = {
            inputValue: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);

    }

    handleSearchChange(e) {
        this.setState({inputValue: e.target.value})
    }

    render() {
        const inputValue = this.state.inputValue;
        const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
        return (
            <div>
                < FilterInput handleSearchChange={this.handleSearchChange} />
                {console.log("props.artists: ", this.props.artists)}

                < Artists artists = {filteredArtists} />
            </div>


        )

    }


}