import { createSlice } from '@reduxjs/toolkit/';
const mealsByIngredientsSlice = createSlice({
    name: "mealsByIngredients",
    initialState: {
        mealsByIngredients: [],
        isMealsByIngredientsLoading: false,
        isMealsByIngredientsOnError: false
    },
    reducers: {
        setMealsByIngredients: (state, action) => {
            state.mealsByIngredients = {...state.mealsByIngredients, [action.payload[1]] : action.payload[0]};
            state.isMealsByIngredientsLoading = false;
        },
        setMealsByIngredientsLoading: state => {
            state.isMealsByIngredientsLoading = true;
        },
        setMealsByIngredientsError: state => {
            state = {...state, mealsByIngredients: {...state.mealsByIngredients}, isMealsByIngredientsLoading: false, isMealsByIngredientsOnError: true}
        },
    }
});
const { actions, reducer } = mealsByIngredientsSlice
export const { setMealsByIngredients , setMealsByIngredientsLoading , setMealsByIngredientsError } = actions;
export default reducer;