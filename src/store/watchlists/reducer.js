const initialState = {
    watchlists: JSON.parse(localStorage.getItem("userData")) || [],
    selectedWatchlist: null
};

const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_WATCHLIST':
            // Check if the watchlist already exists
            const existingWatchlist = state.watchlists.find(watchlist => watchlist.name === action.payload);
            if (existingWatchlist) {
                return state; // Watchlist already exists, return current state
            }
            // Append the new watchlist to the existing watchlists array
            const updatedWatchlists = [...state.watchlists, { name: action.payload, movies: [] }];
            // Update localStorage with the updated watchlists
            localStorage.setItem("userData", JSON.stringify(updatedWatchlists));
            return {
                ...state,
                watchlists: updatedWatchlists
            };
        case 'ADD_MOVIE_TO_WATCHLIST':
            // Find the watchlist where the movie needs to be added
            const updatedWatchlistsAddMovie = state.watchlists.map(watchlist => {
                if (watchlist.name === action.payload.watchlist) {
                    // Append the new movie to the movies array of the watchlist
                    return { ...watchlist, movies: [...watchlist.movies, action.payload] };
                }
                return watchlist;
            });
            // Update localStorage with the updated watchlists
            localStorage.setItem("userData", JSON.stringify(updatedWatchlistsAddMovie));
            return {
                ...state,
                watchlists: updatedWatchlistsAddMovie
            };
        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            const updatedWatchlistsRemoveMovie = state.watchlists.map(watchlist => {
                if (watchlist.name === action.payload.watchlist) {
                    const updatedMovies = watchlist.movies.filter(movie => movie.imdbID !== action.payload.movie.imdbID);
                    return { ...watchlist, movies: updatedMovies };
                }
                return watchlist;
            });
            localStorage.setItem("userData", JSON.stringify(updatedWatchlistsRemoveMovie));
            return {
                ...state,
                watchlists: updatedWatchlistsRemoveMovie
            };
        case 'REMOVE_WATCHLIST':
            const updatedWatchlistsRemove = state.watchlists.filter(watchlist => watchlist.name !== action.payload);
            localStorage.setItem("userData", JSON.stringify(updatedWatchlistsRemove));
            return {
                ...state,
                watchlists: updatedWatchlistsRemove
            };
        default:
            return state;
    }
};

export default watchlistReducer;
