import { LOGIN_USER, LOGOUT_USER, ADD_WATCHLIST, REMOVE_WATCHLIST } from './actionTypes';
let user = sessionStorage.getItem("user")
if (!user) {
    let localStorageUser = localStorage.getItem("user")
    if (localStorageUser) {
        user = localStorageUser
    } else {
        user = null
    }
}

const initialState = {
    loggedIn: false,
    user: user ? JSON.parse(user) : null,
    watchlists: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                loggedIn: false,
                user: null,
                watchlists: [],
            };
        case ADD_WATCHLIST:
            return {
                ...state,
                watchlists: [...state.watchlists, action.payload],
            };
        case REMOVE_WATCHLIST:
            return {
                ...state,
                watchlists: state.watchlists.filter((watchlist) => watchlist.id !== action.payload),
            };
        default:
            return state;
    }
};

export default userReducer;
