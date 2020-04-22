import { SONG_ACTION_TYPES } from './song.action.types';

const INITIAL_STATE = {
    width: 500,
    embedIDs: [
        { id: "ZW677U88" },
        { id: "ZW6FEDOA" },
        { id: "ZW78WAEC" },
        { id: "ZW7AUOCI" },
        { id: "ZW9ABCWU" },
    ],
    error: null
};

const songReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SONG_ACTION_TYPES.GET_SIZE:
            return {
                ...state,
                width: action.payload
            }
        case SONG_ACTION_TYPES.GET_SONG_SUCCESS:
            return {
                ...state,
                embedIDs: action.payload,
            }

        case SONG_ACTION_TYPES.GET_SONG_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default songReducer;