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

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({inputValue: e.target.value})
    }

    filterArtists(artistArray) {

    }

    render() {
        return (
            <div>
                < FilterInput handleChange={this.handleChange} />
                {console.log("props.artists: ", this.props.artists)}

                < Artists artists = {this.filterArtists} />
            </div>


        )

    }


}