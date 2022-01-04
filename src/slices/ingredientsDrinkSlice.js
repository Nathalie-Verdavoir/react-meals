import { createSlice } from '@reduxjs/toolkit/';
const ingredientsDrinkSlice = createSlice({
    name: "ingredientsDrink",
    initialState: {
        ingredientsDrink: null,
        isIngredientsDrinkLoading: false,
        isIngredientsDrinkOnError: false
    },
    reducers: {
        setIngredientsDrink: (state, action) => {
            state.ingredientsDrink = action.payload;
            state.isIngredientsDrinkLoading = false;
        },
        setIngredientsDrinkLoading: state => {
            state.isIngredientsDrinkLoading = true;
        },
        setIngredientsDrinkError: state => {
            state = {...state, ingredientsDrink: {...state.ingredientsDrink}, isIngredientsDrinkLoading: false, isIngredientsDrinkOnError: true}
        },
    }
});
const { actions, reducer } = ingredientsDrinkSlice
export const { setIngredientsDrink , setIngredientsDrinkLoading , setIngredientsDrinkError } = actions;
export default reducer;