import { createSlice } from '@reduxjs/toolkit/';
const drinksByCategoriesSlice = createSlice({
    name: "drinksByCategories",
    initialState: {
        drinksByCategories: [],
        isLoading: false,
        isOnError: false
    },
    reducers: {
        setDrinksByCategories: (state, action) => {
            state.drinksByCategories = {...state.drinksByCategories, [action.payload[1]] : action.payload[0]};
        },
        setDrinksByCategoriesLoading: (state) => {
            state.isLoading = {...state, isLoading: true}
        },
        setDrinksByCategoriesError: (state) => {
            state.isOnError = {...state, drinksByCategories: {...state.drinksByCategories}, isLoading: false, isOnError: true}
        },
    }
});
const { actions, reducer } = drinksByCategoriesSlice
export const { setDrinksByCategories , setDrinksByCategoriesLoading , setDrinksByCategoriesError } = actions;
export default reducer;