import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProp, userState } from "@types";

const initialState: userState = {
    currentUser: null,
    isAuthenticated: false,
    isLoading: false,
    error: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserStart: (state) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, actions: PayloadAction<UserProp>) => {
            state.currentUser = actions.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = false;
        },
        getUserFailure: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        updatetUserStart: (state) => {
            state.isLoading = true;
        },
        updatetUserSuccess: (state, actions: PayloadAction<UserProp>) => {
            state.currentUser = actions.payload;
            state.isLoading = false;
            state.error = false;
        },
        updatetUserFailure: (state) => {
            state.error = true;
            state.isLoading = false;
        },
    }
})

export const {
    getUserFailure,
    getUserSuccess,
    getUserStart,
    updatetUserFailure,
    updatetUserStart,
    updatetUserSuccess
} = userSlice.actions;

export default userSlice.reducer;