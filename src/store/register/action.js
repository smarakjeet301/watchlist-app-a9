import { REGISTER_USER, CHECK_USER_EMAIL } from "./actionTypes";

export const registerUser = (userData) => ({
    type: REGISTER_USER,
    payload: userData,
});

export const checkUserEmail = () => ({
    type: CHECK_USER_EMAIL,
});