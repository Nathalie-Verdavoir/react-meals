import { createSlice } from '@reduxjs/toolkit/';
const mealsByIngredientsSlice = createSlice({
    name: "mealsByIngredients",
    initialState: {
        mealsByIngredients: [],
        isLoading: false,
        isOnError: false
    },
    reducers: {
        setMealsByIngredients: (state, action) => {
            state.mealsByIngredients = {...state.mealsByIngredients, [action.payload[1]] : action.payload[0]};
        },
        setMealsByIngredientsLoading: (state) => {
            state.isLoading = {...state, isLoading: true}
        },
        setMealsByIngredientsError: (state) => {
            state.isOnError = {...state, mealsByIngredients: {...state.mealsByIngredients}, isLoading: false, isOnError: true}
        },
    }
});
const { actions, reducer } = mealsByIngredientsSlice
export const { setMealsByIngredients , setMealsByIngredientsLoading , setMealsByIngredientsError } = actions;
export default reducer;