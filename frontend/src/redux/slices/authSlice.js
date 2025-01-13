import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token : localStorage.getItem('token') || null,
    role : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login : (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
            localStorage.setItem('token', action.payload.token);
        },
        logout : (state) => {
            state.user = null;
            state.token = null;
            state.role = null;
            localStorage.removeItem('token');
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;