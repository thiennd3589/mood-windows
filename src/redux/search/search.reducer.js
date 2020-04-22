import { SEARCH_ACTION_TYPES } from './search.action.types';

const INITIAL_STATE = {
    gif:{
        url: "https://media3.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif?cid=5dedc193b0590200add75644fe04a41f97d5af20b8075334&rid=giphy.gif",
        width: 480,
        height: 360,
    },
    error: '',
}
const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_ACTION_TYPES.GET_GIF_DATA_SUCCESS:
            return {
                ...state,
                gif: action.payload
            }
        case SEARCH_ACTION_TYPES.GET_GIF_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default searchReducer;