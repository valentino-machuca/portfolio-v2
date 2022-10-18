import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
    name: 'reducer',
    initialState: {
        joined: false,
        night: true,
        menu: false,
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
        },
        setMenu(state){
            return {
                ...state,
                menu: !state.menu,
            }
        }
    }
})

export const {
    setJoined,
    setNight,
    setMenu
} = main.actions;

export default main.reducer;