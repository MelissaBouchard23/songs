import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(cur => {
            return (
                <div className="item" key={cur.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(cur)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{cur.title}</div>
                </div>
            );
        });
    }

    render() {
        // this.props === { songs: state.songs}
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);