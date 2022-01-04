import { createSlice } from '@reduxjs/toolkit/';
const drinksByLetterSlice = createSlice({
    name: "drinksByLetter",
    initialState: {
        drinksByLetter: [],
        isDrinksByLetterLoading: false,
        isDrinksByLetterOnError: false
    },
    reducers: {
        setDrinksByLetter: (state, action) => {
            state.drinksByLetter = {...state.drinksByLetter, [action.payload[1]] : action.payload[0]};
            state.isDrinksByLetterLoading = false;
        },
        setDrinksByLetterLoading: state => {
            state.isDrinksByLetterLoading = true;
        },
        setDrinksByLetterError: state => {
            state = {...state, drinksByLetter: {...state.drinksByLetter}, isDrinksByLetterLoading: false, isDrinksByLetterOnError: true}
        },
    }
});
const { actions, reducer } = drinksByLetterSlice
export const { setDrinksByLetter , setDrinksByLetterLoading , setDrinksByLetterError } = actions;
export default reducer;