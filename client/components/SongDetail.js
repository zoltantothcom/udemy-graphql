import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

import query from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        const { data } = this.props;

        if (data.loading) return null;

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{data.song.title}</h3>
                <LyricList lyrics={data.song.lyrics} />
                <LyricCreate songId={this.props.params.id} />
            </div>
        );
    }
}

export default graphql(query, {
    options: props => {
        return {
            variables: {
                id: props.params.id
            }
        }
    }
})(SongDetail);