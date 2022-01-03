import { createSlice } from '@reduxjs/toolkit/';
const drinksByLetterSlice = createSlice({
    name: "drinksByLetter",
    initialState: {
        drinksByLetter: [],
        isLoading: false,
        isOnError: false
    },
    reducers: {
        setDrinksByLetter: (state, action) => {
            state.drinksByLetter = {...state.drinksByLetter, [action.payload[1]] : action.payload[0]};
        },
        setDrinksByLetterLoading: (state) => {
            state.isLoading = {...state, isLoading: true}
        },
        setDrinksByLetterError: (state) => {
            state.isOnError = {...state, drinksByLetter: {...state.drinksByLetter}, isLoading: false, isOnError: true}
        },
    }
});
const { actions, reducer } = drinksByLetterSlice
export const { setDrinksByLetter , setDrinksByLetterLoading , setDrinksByLetterError } = actions;
export default reducer;