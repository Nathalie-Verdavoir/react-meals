import { createSlice } from '@reduxjs/toolkit/';
const currentMealSlice = createSlice({
    name: "currentMeal",
    initialState: {
        currentMeal: null,
        isCurrentMealLoading: false,
        isCurrentMealOnError: false
    },
    reducers: {
        setCurrentMeal: (state, action) => {
            state.currentMeal = {...state.currentMeal, [action.payload.idMeal] : action.payload }
            state.isCurrentMealLoading = false;
        },
        setCurrentMealLoading: state => {
            state.isCurrentMealLoading = true;
        },
        setCurrentMealError: state => {
            state = {...state, currentMeal: {...state.currentMeal}, isCurrentMealLoading: false, isCurrentMealOnError: true}
        },
    }
});
const { actions, reducer } = currentMealSlice
export const { setCurrentMeal , setCurrentMealLoading , setCurrentMealError } = actions;
export default reducer;