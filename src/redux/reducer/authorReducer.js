import * as types from '../action/actionTypes';


export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}

