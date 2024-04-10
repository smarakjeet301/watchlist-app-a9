import { REGISTER_USER, CHECK_USER_EMAIL } from './actionTypes';

const initialState = {
    userEmail: JSON.parse(localStorage.getItem('userEmail')) || "",
    userData: JSON.parse(localStorage.getItem('userData')) || []
};

const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            const userEmail = action.payload;
            if (!state.userEmail.includes(userEmail)) {
                const updatedEmail = { ...state.userEmail, userEmail };
                localStorage.setItem('userEmail', JSON.stringify(updatedEmail));
                localStorage.setItem('userData', JSON.stringify([
                    {
                        userEmail,
                        watchlists: []
                    }
                ]));
                return {
                    ...state,
                    userEmail: updatedEmail,
                };
            }
            return state;
        case CHECK_USER_EMAIL:
            const storedEmail = JSON.parse(localStorage.getItem('userEmail'));
            return {
                ...state,
                userEmail: storedEmail || "",
            };
        default:
            return state;
    }
};

export default userRegisterReducer;
