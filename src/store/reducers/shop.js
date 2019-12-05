
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    shopData: null,
    isFetching: true,
    errorMessage: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                shopData: action.collections,
                isFetching: false
            };
        case actionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
};

export default shopReducer;