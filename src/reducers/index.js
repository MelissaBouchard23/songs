import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Dancing in the Dark', artist: 'Bruce Springsteen', album: 'Born in the U.S.A.', year: 1984, duration: '3:59' },
        { title: 'Time After Time', artist: 'Cyndi Lauper', album: 'She\'s So Unusual', year: 1983, duration: '4:01' },
        { title: 'Walk of Life', artist: 'Dire Straits', album: 'Brothers in Arms', year: 1985, duration: '4:12' },
        { title: 'I Want to Know What Love Is', artist: 'Foreigner', album: 'Agent Provocateur', year: 1984, duration: '5:04' },
        { title: 'Come On Eileen', artist: 'Dexys Midnight Runners', album: 'Too-Rye-Ay', year: 1982, duration: '4:12' },
        { title: 'Africa', artist: 'Toto', album: 'Toto IV', year: 1982, duration: '4:55' },
        { title: 'Runaway', artist: 'Bon Jovi', album: 'Bon Jovi', year: 1984, duration: '3:52' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    } else {
        return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});