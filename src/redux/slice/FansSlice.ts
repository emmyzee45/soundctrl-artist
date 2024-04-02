import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FansProps } from "@types";

const initialState = {
    fans: [] as FansProps[],
    isLoading: false,
    error: false,
}

const fansSlice = createSlice({
    name: "fan",
    initialState,
    reducers: {
        getFansStart: (state) => {
            state.isLoading = true;
        },
        getFansSuccess: (state, actions: PayloadAction<FansProps[]>) => {
            state.fans = actions.payload;
            state.isLoading = false;
            state.error = false;
        },
        getFansFailure: (state) => {
            state.isLoading = false;
            state.error = true;
        },
    }
})

export const {
    getFansFailure,
    getFansSuccess,
    getFansStart
} = fansSlice.actions;

export default fansSlice.reducer