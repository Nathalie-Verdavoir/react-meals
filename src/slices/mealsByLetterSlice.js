import { createSlice } from '@reduxjs/toolkit/';
const mealsByLetterSlice = createSlice({
    name: "mealsByLetter",
    initialState: {
        mealsByLetter: [],
        isLoading: false,
        isOnError: false
    },
    reducers: {
        setMealsByLetter: (state, action) => {
            state.mealsByLetter = {...state.mealsByLetter, [action.payload[1]] : action.payload[0]};
        },
        setMealsByLetterLoading: (state) => {
            state.isLoading = {...state, isLoading: true}
        },
        setMealsByLetterError: (state) => {
            state.isOnError = {...state, mealsByLetter: {...state.mealsByLetter}, isLoading: false, isOnError: true}
        },
    }
});
const { actions, reducer } = mealsByLetterSlice
export const { setMealsByLetter , setMealsByLetterLoading , setMealsByLetterError } = actions;
export default reducer;