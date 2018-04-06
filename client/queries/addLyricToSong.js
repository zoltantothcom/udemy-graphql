import gql from 'graphql-tag';

export default gql`
    mutation AddLyricToSong($content: String, $songId: ID!) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            title
            lyrics {
                id
                content
            }
        }
    }
`;