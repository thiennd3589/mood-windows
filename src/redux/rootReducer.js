import { combineReducers } from 'redux';

import searchReducer from './search/search.reducer';
import songReducer from './song/song.reducer';


const rootReducer = combineReducers({
    search: searchReducer,
    song: songReducer
});

export default rootReducer;