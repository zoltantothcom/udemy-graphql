import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

import query from '../queries/fetchSongList';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query
            }]
        }).then(() => hashHistory.push('/'));
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Song Title:</label>
                    <input 
                        onChange={e => this.setState({ title: e.target.value })}
                        value={this.state.title} />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation addSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);