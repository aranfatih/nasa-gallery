import { Pagination, Stack } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paginationPage, setPaginationPage, totalResult } from '../search/searchSlice';

function FeedPagination(props) {
    const dispatch = useDispatch();
    const paginationPageSelector = useSelector(paginationPage);
    const totalResultSelector = useSelector(totalResult);

    const handlePagination = (event, value) => {
        dispatch(setPaginationPage(value))
        window.scrollTo(0, 600)
    }

    return (
        <Pagination count={totalResultSelector / 100} shape="rounded" variant="outlined"
            page={paginationPageSelector} onChange={handlePagination} />
    );
}

export default FeedPagination;