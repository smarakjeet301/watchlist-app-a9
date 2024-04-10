import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import appConfig from '../config/appConfig';
import axios from 'axios';
// Actions
import { createWatchlist, addMovieToWatchlist } from '../store/watchlists/action';

function MovieGrid({ watchlists, createWatchlist, addMovieToWatchlist, searchResults }) {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        setMoviesData(searchResults)
    }, [searchResults]);

    const handleCheckboxClick = async (movie) => {
        const confirmAdd = window.confirm('Do you want to add this movie to your watchlist?');
        if (confirmAdd) {
            const watchlistName = prompt('Enter the name of the watchlist:');
            if (watchlistName) {
                const existingWatchlist = watchlists.find(watchlist => watchlist.name === watchlistName);
                if (!existingWatchlist) {
                    createWatchlist(watchlistName);
                }

                try {
                    const response = await axios.get(`${appConfig.appBaseUrl}/?i=${movie.imdbID}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`);
                    const selectedMovie = response.data;
                    addMovieToWatchlist({ ...selectedMovie, watchlist: watchlistName });
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                }

            }
        }
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {moviesData.map(movie => (
                <div key={movie.imdbID} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                    {/* Bookmark Icon */}
                    <input
                        type="checkbox"
                        id={`movie-checkbox-${movie.imdbID}`}
                        className="absolute top-2 left-2 appearance-none square-full w-6 h-6 border-2 border-gray-400 checked:bg-green-500 checked:border-transparent"
                        onClick={(e) => {
                            e.preventDefault()
                            handleCheckboxClick(movie)
                        }}
                    />
                    {/* Movie Poster */}
                    <img src={movie.Poster === "N/A" ? "/logo512.png" : movie.Poster} alt={movie.Title} className={`w-full h-56 ${movie.Poster === "N/A" ? "object-contain" : "object-cover"}`} />
                    {/* Movie Title */}
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2 text-gray-800">{movie.Title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    try {
        return {
            watchlists: state.watchlist.watchlists,
            searchResults: state.search.search_movies ? state.search.search_movies : []
        }
    } catch (err) {
        console.error(err)
    }
}



export default connect(mapStateToProps, { createWatchlist, addMovieToWatchlist })(MovieGrid);