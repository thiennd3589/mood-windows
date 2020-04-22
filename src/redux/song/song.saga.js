import { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils';

import { SONG_ACTION_TYPES } from './song.action.types';
import { getSongSuccess, getSongFailure } from './song.action';

export function* getSong({ payload }) {
    try {
        const songRef = yield firestore.collection('song');
        const snapShot = yield songRef.where(payload, '==', true).get();
        yield put(getSongSuccess(snapShot.docs));
    } catch (error) {
        yield put(getSongFailure(error));

    }
}

export function* onGetSongStart() {
    yield takeLatest(SONG_ACTION_TYPES.GET_SONG_START, getSong);
}

export function* songSaga() {
    yield all([call(onGetSongStart)]);
}