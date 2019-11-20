import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    visible: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                visible: !state.visible
            };
        default:
            return state;
    }
}

export default cartReducer;