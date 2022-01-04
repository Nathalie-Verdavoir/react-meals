import { createSlice } from '@reduxjs/toolkit/';
const drinksByIngredientsSlice = createSlice({
    name: "drinksByIngredients",
    initialState: {
        drinksByIngredients: [],
        isDrinksByIngredientsLoading: false,
        isDrinksByIngredientsOnError: false
    },
    reducers: {
        setDrinksByIngredients: (state, action) => {
            state.drinksByIngredients = {...state.drinksByIngredients, [action.payload[1]] : action.payload[0]};
            state.isDrinksByIngredientsLoading = false;
        },
        setDrinksByIngredientsLoading: state => {
            state.isDrinksByIngredientsLoading = true;
        },
        setDrinksByIngredientsError: state => {
            state = {...state, drinksByIngredients: {...state.drinksByIngredients}, isDrinksByIngredientsLoading: false, isDrinksByIngredientsOnError: true}
        },
    }
});
const { actions, reducer } = drinksByIngredientsSlice
export const { setDrinksByIngredients , setDrinksByIngredientsLoading , setDrinksByIngredientsError } = actions;
export default reducer;