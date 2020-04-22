import {createSelector} from 'reselect';

const songSelect = state => state.song;

export const songIDSelect = createSelector(
    [songSelect],
    song => song.embedIDs
);

