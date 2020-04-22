import {all,call} from 'redux-saga/effects';

import {searchSagas} from './search/search.saga';
import {songSaga} from './song/song.saga';


function* rootSaga(){
    yield all([call(searchSagas),call(songSaga)]);
};

export default rootSaga;