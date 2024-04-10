export const createWatchlist = (watchlistName) => ({
    type: 'CREATE_WATCHLIST',
    payload: watchlistName
});

export const addMovieToWatchlist = (movie) => ({
    type: 'ADD_MOVIE_TO_WATCHLIST',
    payload: movie
});