export const createWatchlist = (watchlistName) => ({
    type: 'CREATE_WATCHLIST',
    payload: watchlistName
});

export const addMovieToWatchlist = (movie) => ({
    type: 'ADD_MOVIE_TO_WATCHLIST',
    payload: movie
});

export const removeMovieFromWatchlist = (watchlistName, movie) => {
    return {
        type: "REMOVE_MOVIE_FROM_WATCHLIST",
        payload: {
            watchlist: watchlistName,
            movie: movie
        }
    };
};

export const removeWatchlist = (watchlistName) => {
    return {
        type: "REMOVE_WATCHLIST",
        payload: watchlistName
    };
};