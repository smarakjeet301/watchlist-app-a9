const initialState = {
    watchlists: [],
    selectedWatchlist: null
};

const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_WATCHLIST':
            return {
                ...state,
                watchlists: [...state.watchlists, { name: action.payload, movies: [] }]
            };
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
                ...state,
                watchlists: state.watchlists.map(watchlist => {
                    if (watchlist.name === action.payload.watchlist) { // Check if the watchlist name matches the movie's watchlist
                        return { ...watchlist, movies: [...watchlist.movies, action.payload] };
                    }
                    return watchlist;
                })
            };
        default:
            return state;
    }
};

export default watchlistReducer;

