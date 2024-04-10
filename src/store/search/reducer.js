import { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE } from './actionTypes';

const initialState = {
    loading: false,
    movies: [],
    error: '',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                search_movies: action.payload,
                error: '',
            };
        case SEARCH_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                search_movies: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;
