
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    shopData: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                shopData: action.collections
            }
        default:
            return state;
    }
};

export default shopReducer;