import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    setSearchResult,
    paginationPage,
    setPaginationPage,
    setTotalResult,
    setLoading
} from './searchSlice';

function SearchInput(props) {
    const dispatch = useDispatch();
    const paginationPageSelector = useSelector(paginationPage);
    const [inputText, setInputText] = React.useState("earth");

    React.useEffect(() => {
        // fetch new images when page changed
        fetchImages(paginationPageSelector)
    }, [paginationPageSelector])

    const handleInputText = e => setInputText(e.target.value)
    const handleSubmit = e => {
        // fetch images when submitted a text search
        e.preventDefault();
        fetchImages(1)
        dispatch(setPaginationPage(1))
    }

    const fetchImages = (page) => {
        // empty dataSource if user submitted an empty text 
        if (inputText.length <= 0 && page === 1) {
            dispatch(setSearchResult([]))
            dispatch(setTotalResult(0))
            return;
        }

        // make loading true and show skeleton
        dispatch(setLoading(true))

        const apiRoot = "https://images-api.nasa.gov";
        const api = `${apiRoot}/search?q=${inputText}&media_type=image&page=${page}`
        fetch(api)
            .then(res => res.json())
            .then(json => {
                if (json && json.collection) {
                    console.log(json.collection.items);
                    // API doesnt have limit, so I spliced the results to 12 elements
                    dispatch(setSearchResult(json.collection.items?.slice(0, 15)))
                    dispatch(setTotalResult(json.collection.metadata?.total_hits))
                }
                dispatch(setLoading(false))
            })
            .catch(error => { })
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={inputText} onChange={handleInputText}
                fullWidth label="don't search for alien..." id="nasa-search" className="search-input"
            />
        </form>
    );
}

export default SearchInput;