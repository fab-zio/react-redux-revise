import * as types from '../action/actionTypes';


export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // state.push(action.course) //wrong 'cause this mutate the state
            return [...state, { ...action.course }];
        default:
            return state;
    }
}

