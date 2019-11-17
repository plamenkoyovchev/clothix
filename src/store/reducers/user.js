import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            };
        default:
            return state;
    }
};

export default userReducer;