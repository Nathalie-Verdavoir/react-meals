import { createSlice } from '@reduxjs/toolkit/';
const mealsByLetterSlice = createSlice({
    name: "mealsByLetter",
    initialState: {
        mealsByLetter: [],
        isMealsByLetterLoading: false,
        isMealsByLetterOnError: false
    },
    reducers: {
        setMealsByLetter: (state, action) => {
            state.mealsByLetter = {...state.mealsByLetter, [action.payload[1]] : action.payload[0]};
            state.isMealsByLetterLoading = false;
        },
        setMealsByLetterLoading: state => {
            state.isMealsByLetterLoading = true;
        },
        setMealsByLetterError: state => {
            state = {...state, mealsByLetter: {...state.mealsByLetter}, isMealsByLetterLoading: false, isMealsByLetterOnError: true}
        },
    }
});
const { actions, reducer } = mealsByLetterSlice
export const { setMealsByLetter , setMealsByLetterLoading , setMealsByLetterError } = actions;
export default reducer;