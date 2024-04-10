import axios from 'axios';
import { SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE } from './actionTypes';
import appConfig from '../../config/appConfig';

export const searchMovieRequest = () => ({
    type: SEARCH_MOVIE_REQUEST,
});

export const searchMovieSuccess = (movies) => ({
    type: SEARCH_MOVIE_SUCCESS,
    payload: movies,
});

export const searchMovieFailure = (error) => ({
    type: SEARCH_MOVIE_FAILURE,
    payload: error,
});

export const searchMovie = (query) => {
    return async (dispatch) => {
        dispatch(searchMovieRequest());
        try {
            const response = await axios.get(`${appConfig.appBaseUrl}/?s=${query}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`);
            dispatch(searchMovieSuccess(response.data.Search));
        } catch (error) {
            dispatch(searchMovieFailure(error.message));
        }
    };
};
