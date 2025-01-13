import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    pantryStaff : [],
    tasks : [],
}

const pantrySlice = createSlice({
    name : 'pantry',
    initialState ,
    reducers : {
        setPantryStaff : (state , action) => {
            state.pantryStaff = action.payload;
        },
        setTasks : (state , action) => {
            state.tasks = action.payload;
        },
    },
});

export const { setPantryStaff, setTasks } = pantrySlice.actions;
export default pantrySlice.reducer;