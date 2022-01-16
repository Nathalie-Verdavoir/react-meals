import { createSlice } from '@reduxjs/toolkit/';
const ingredientsMealSlice = createSlice({
    name: "ingredientsMeal",
    initialState: {
        ingredientsMeal: null,
        isIngredientsMealLoading: false,
        isIngredientsMealOnError: false
    },
    reducers: {
        setIngredientsMeal: (state, action) => {
            state.ingredientsMeal = action.payload;
            state.isIngredientsMealLoading = false;
        },
        setIngredientsMealLoading: state => {
            state.isIngredientsMealLoading = true;
        },
        setIngredientsMealError: state => {
            state = {...state, ingredientsMeal: {...state.ingredientsMeal}, isIngredientsMealLoading: false, isIngredientsMealOnError: true}
        },
    }
});
const { actions, reducer } = ingredientsMealSlice
export const { setIngredientsMeal , setIngredientsMealLoading , setIngredientsMealError } = actions;
export default reducer;