import { ADD_WATCHLIST, LOGIN_USER, LOGOUT_USER, REMOVE_WATCHLIST } from "./actionTypes";

export const loginUser = (userData) => ({
    type: LOGIN_USER,
    payload: userData,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const addWatchlist = (watchlist) => ({
    type: ADD_WATCHLIST,
    payload: watchlist,
});

export const removeWatchlist = (watchlistId) => ({
    type: REMOVE_WATCHLIST,
    payload: watchlistId,
});
