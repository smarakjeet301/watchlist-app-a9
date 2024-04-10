import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../store/search/action';

function SearchBar({ searchMovie, searchResults }) {
    const [searchText, setSearchText] = useState('');

    const searchInputHandler = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        searchMovie(searchText);
    };

    useEffect(() => {
        // for default search results
        searchMovie("John Wick");
    }, [])


    return (
        <div className="flex items-center border border-gray-300 rounded-md p-2 m-5">
            <div className="flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>
            <input
                type="text"
                placeholder="Search"
                className="flex-grow outline-none border-0"
                style={{ borderColor: 'grey' }}
                value={searchText}
                onChange={searchInputHandler}
            />
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" onClick={handleSearch}>Search</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    searchResults: state
});

export default connect(mapStateToProps, { searchMovie })(SearchBar);
