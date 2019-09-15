import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select one of these awesome 80s' song for more details.</div>
    }
    return (
        <div>
            <h3>Your Awesome 80s' Song</h3>
            <p>
                Title: {song.title}<br />
                Artist: {song.artist}<br />
                Album: {song.album}<br />
                Released in: {song.year}<br />
                Duration: {song.duration}<br/>

            </p>
            
        </div>
    );
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);