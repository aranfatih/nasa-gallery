import React from 'react';
import './Search.css';
import SearchInput from './SearchInput';

function ImageSearch(props) {
    return (
        <section className="search-wrapper">
            <img src="https://wallpaperaccess.com/full/1940080.jpg" style={{ width: '100%' }} />

            <div className="search-handler-wrapper">
                <div className="search-handler-container">
                    <h1>Just Nasa Things 🌌</h1>
                    <p>Search for something cool in the outer space.</p>
                    <SearchInput />
                </div>
            </div>
        </section>
    );
}

export default ImageSearch;