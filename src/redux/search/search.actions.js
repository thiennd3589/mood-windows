import { SEARCH_ACTION_TYPES } from './search.action.types';

export const searchStart = keywords => ({
    type: SEARCH_ACTION_TYPES.GET_GIF_DATA_START,
    payload: keywords
});

export const searchSuccess = (gif) => ({
    type: SEARCH_ACTION_TYPES.GET_GIF_DATA_SUCCESS,
    payload: gif
});

export const searchFailure = error => ({
    type: SEARCH_ACTION_TYPES.GET_GIF_DATA_FAILURE,
    payload: error
});

export const searchDefault = () => ({
    type: SEARCH_ACTION_TYPES.GET_DEFAULT,
})