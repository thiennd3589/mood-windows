import { takeLatest, all, call, put } from 'redux-saga/effects';
import { SEARCH_ACTION_TYPES } from '../search/search.action.types';
import axios from 'axios';
import { searchFailure, searchSuccess } from './search.actions';

export function* getGifData({ payload }) {
    try {
        const result = yield axios.get(
            `https://api.giphy.com/v1/gifs/search?q=${payload}&api_key={Your ID}&limit=20`
        );

        const data = yield result.data.data;
        const randomGif = yield parseInt(Math.random() * 20);
        const gif = yield {
            url: data[randomGif].images.downsized_large.url,
            width: data[randomGif].images.downsized_large.width,
            height: data[randomGif].images.downsized_large.height
        };
        yield put(searchSuccess(gif));
    } catch (error) {
        yield put(searchFailure(error));
    }
}

export function* onSearchStart() {
    yield takeLatest(SEARCH_ACTION_TYPES.GET_GIF_DATA_START, getGifData);
}

export function* searchSagas() {
    yield all([call(onSearchStart)]);
}