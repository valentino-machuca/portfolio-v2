import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
    name: 'reducer',
    initialState: {
        joined: false,
        night: true,
    },
    reducers: {
        setJoined(state){
            return {
                ...state,
                joined: true,
            }
        },
        setNight(state){
            return {
                ...state,
                night: !state.night,
            }
        }
    }
})

export const {
    setJoined,
    setNight,
} = main.actions;

export default main.reducer;