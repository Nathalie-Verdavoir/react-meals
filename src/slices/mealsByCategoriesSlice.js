import { createSlice } from '@reduxjs/toolkit/';
const mealsByCategoriesSlice = createSlice({
    name: "mealsByCategories",
    initialState: {
        mealsByCategories: [],
        isMealsByCategoriesLoading: false,
        isMealsByCategoriesOnError: false
    },
    reducers: {
        setMealsByCategories: (state, action) => {
            state.mealsByCategories = {...state.mealsByCategories, [action.payload[1]] : action.payload[0]};
            state.isMealsByCategoriesLoading = false;
        },
        setMealsByCategoriesLoading: state => {
            state.isMealsByCategoriesLoading = true;
        },
        setMealsByCategoriesError: state => {
            state = {...state, mealsByCategories: {...state.mealsByCategories}, isMealsByCategoriesLoading: false, isMealsByCategoriesOnError: true}
        },
    }
});
const { actions, reducer } = mealsByCategoriesSlice
export const { setMealsByCategories , setMealsByCategoriesLoading , setMealsByCategoriesError } = actions;
export default reducer;