import {ADD_USER, CHANGE_OPEN_THREAD, DEL_USER, IS_OPEN_THREAD, IS_RELOAD} from "./actions";

const defaultState = {
    user: {},
    isOpenThread:false,
    openThread: null
};

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            };
        case DEL_USER:
            return {
                ...state,
                user: action.payload
            };
        case CHANGE_OPEN_THREAD:
            return {
                ...state,
                openThread: action.payload
            };
        case IS_RELOAD:
            return {
                ...state,
                isReload: action.payload
            };
        case IS_OPEN_THREAD:
            return {
                ...state,
                isOpenThread: action.payload
            }
        // case
    }
    return state;
};