import { createSelector } from 'reselect';

const directorySelector = state => state.directory;

export const getDirectoryItemsSelector = createSelector(
    [directorySelector],
    directory => directory.items
);