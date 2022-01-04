import { createSlice } from '@reduxjs/toolkit/';
const drinksByCategoriesSlice = createSlice({
    name: "drinksByCategories",
    initialState: {
        drinksByCategories: [],
        isDrinksByCategoriesLoading: false,
        isDrinksByCategoriesOnError: false
    },
    reducers: {
        setDrinksByCategories: (state, action) => {
            state.drinksByCategories = {...state.drinksByCategories, [action.payload[1]] : action.payload[0]};
            state.isDrinksByCategoriesLoading = false;
        },
        setDrinksByCategoriesLoading: state => {
            state.isDrinksByCategoriesLoading = true;
        },
        setDrinksByCategoriesError: state => {
            state = {...state, drinksByCategories: {...state.drinksByCategories}, isDrinksByCategoriesLoading: false, isDrinksByCategoriesOnError: true}
        },
    }
});
const { actions, reducer } = drinksByCategoriesSlice
export const { setDrinksByCategories , setDrinksByCategoriesLoading , setDrinksByCategoriesError } = actions;
export default reducer;