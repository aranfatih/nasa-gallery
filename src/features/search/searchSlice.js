import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchResult: [],
    paginationPage: 1,
    totalResult: 0,
    loading: false
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        setPaginationPage: (state, action) => {
            state.paginationPage = action.payload;
        },
        setTotalResult: (state, action) => {
            state.totalResult = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setPaginationPage, setSearchResult, setTotalResult, setLoading } = searchSlice.actions;

export const searchResult = (state) => state.search.searchResult;
export const paginationPage = (state) => state.search.paginationPage;
export const totalResult = (state) => state.search.totalResult;
export const loading = (state) => state.search.loading;

export default searchSlice.reducer;
