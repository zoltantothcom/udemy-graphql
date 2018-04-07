import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import mutation from '../queries/likeLyric';

class LyricList extends Component {
    onLike(id, likes) {
        this.props.mutate({ 
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
        });
    }

    renderLyrics() {
        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li className="collection-item" key={id}>
                    {content}
                    <i 
                        className="material-icons right"
                        onClick={() => this.onLike(id, likes)}
                    >
                        thumb_up
                    </i>
                    <span className="right">{likes}</span>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

export default graphql(mutation)(LyricList);
