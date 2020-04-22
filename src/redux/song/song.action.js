import { SONG_ACTION_TYPES } from './song.action.types';

export const getSongStart = kind => ({
    type: SONG_ACTION_TYPES.GET_SONG_START,
    payload: kind,
});

export const getSongSuccess = embedIDs => ({
    type: SONG_ACTION_TYPES.GET_SONG_SUCCESS,
    payload: embedIDs,
});

export const getSongFailure = error => ({
    type: SONG_ACTION_TYPES.GET_SONG_FAILURE,
    payload: error
});

export const getSize = width => ({
    type: SONG_ACTION_TYPES.GET_SIZE,
    payload: width
})