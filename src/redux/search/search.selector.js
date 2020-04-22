import {createSelector} from 'reselect';

const searchSelect = state => state.search;

export const gifSelect = createSelector(
    [searchSelect],
    search => search.gif
);