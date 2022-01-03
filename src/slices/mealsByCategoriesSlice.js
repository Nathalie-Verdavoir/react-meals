import { createSlice } from '@reduxjs/toolkit/';
const mealsByCategoriesSlice = createSlice({
    name: "mealsByCategories",
    initialState: {
        mealsByCategories: [],
        isLoading: false,
        isOnError: false
    },
    reducers: {
        setMealsByCategories: (state, action) => {
            state.mealsByCategories = {...state.mealsByCategories, [action.payload[1]] : action.payload[0]};
        },
        setMealsByCategoriesLoading: (state) => {
            state.isLoading = {...state, isLoading: true}
        },
        setMealsByCategoriesError: (state) => {
            state.isOnError = {...state, mealsByCategories: {...state.mealsByCategories}, isLoading: false, isOnError: true}
        },
    }
});
const { actions, reducer } = mealsByCategoriesSlice
export const { setMealsByCategories , setMealsByCategoriesLoading , setMealsByCategoriesError } = actions;
export default reducer;