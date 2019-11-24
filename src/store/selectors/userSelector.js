import { createSelector } from 'reselect';

const userSelector = state => state.user;

export const getCurrentUserSelector = createSelector(
    [userSelector],
    user => user.currentUser
);