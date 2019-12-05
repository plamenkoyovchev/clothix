import * as actionTypes from './actionTypes';
import { firestore, convertCollectionSnapshotToMap } from '../../shared/utils/firebase-utils';

const fetchCollectionsStart = () => ({
    type: actionTypes.FETCH_COLLECTIONS_START
});

const fetchCollectionsSuccess = collectionsMap => ({
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    collections: collectionsMap
});

const fetchCollectionsFailure = err => ({
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    errorMessage: err.message
});

export const fetchCollectionsAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart());
        const collectionsRef = firestore.collection("collections");
        collectionsRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(err => dispatch(fetchCollectionsFailure(err.message)));
    };
}