import { createSlice } from '@reduxjs/toolkit/';
const drinksByIngredientsSlice = createSlice({
    name: "drinksByIngredients",
    initialState: {
        drinksByIngredients: [],
        isLoading: false,
        isOnError: false
    },
    reducers: {
        setDrinksByIngredients: (state, action) => {
            state.drinksByIngredients = {...state.drinksByIngredients, [action.payload[1]] : action.payload[0]};
        },
        setDrinksByIngredientsLoading: (state) => {
            state.isLoading = {...state, isLoading: true}
        },
        setDrinksByIngredientsError: (state) => {
            state.isOnError = {...state, drinksByIngredients: {...state.drinksByIngredients}, isLoading: false, isOnError: true}
        },
    }
});
const { actions, reducer } = drinksByIngredientsSlice
export const { setDrinksByIngredients , setDrinksByIngredientsLoading , setDrinksByIngredientsError } = actions;
export default reducer;