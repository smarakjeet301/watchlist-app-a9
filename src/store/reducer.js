import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import watchlistReducer from './watchlists/reducer';
import searchMovieReducer from "./search/reducer";
import userRegisterReducer from "./register/reducer";
const rootReducer = combineReducers({ userRegisterReducer, loginReducer, watchlist: watchlistReducer, search: searchMovieReducer, });
export default rootReducer;