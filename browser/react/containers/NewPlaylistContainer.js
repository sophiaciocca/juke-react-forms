import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
            buttonDisabled: true,
            errorMessage: 'none'
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        var targetValue = e.target.value;
        this.setState({ inputValue: targetValue })
        console.log('typing: ', this.state.inputValue)
        if (targetValue.length > 16) {
            this.setState({ buttonDisabled: true, errorMessage: 'block' });
        } else if (targetValue.length === 0) {
            this.setState({ buttonDisabled: true })
        } else {
            this.setState({ buttonDisabled: false, errorMessage: 'none' });
        }

    }

    handleSubmit(e) {
        console.log('length: ', this.state.inputValue.length);
        e ? e.preventDefault() : null;
        const addPlaylist = this.props.addPlaylist;
        addPlaylist(this.state.inputValue);
        this.setState({ inputValue: '' });
        if (this.state.inputValue.length === 0) {
            this.setState({ buttonDisabled: true, errorMessage: 'block' });
        }
    }

    render() {
        return (
            <div>
                <div className="alert alert-warning" style={{ display: `${this.state.errorMessage}` }}>Please enter a name</div>
                <div> {
                    <NewPlaylist handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit} inputValue={this.state.inputValue} bool={this.state.buttonDisabled} />
                }</div>
            </div>
        )
    }
}