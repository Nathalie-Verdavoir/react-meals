import { createSlice } from '@reduxjs/toolkit/';
const categoriesDrinkSlice = createSlice({
    name: "categoriesDrink",
    initialState: {
        categoriesDrink: null,
        isCategoriesDrinkLoading: false,
        isCategoriesDrinkOnError: false
    },
    reducers: {
        setCategoriesDrink: (state, action) => {
            state.categoriesDrink = action.payload;
            state.isCategoriesDrinkLoading = false;
        },
        setCategoriesDrinkLoading: state => {
            state.isCategoriesDrinkLoading = true;
        },
        setCategoriesDrinkError: state => {
            state = {...state, categoriesDrink: {...state.categoriesDrink}, isCategoriesDrinkLoading: false, isCategoriesDrinkOnError: true}
        },
    }
});
const { actions, reducer } = categoriesDrinkSlice
export const { setCategoriesDrink , setCategoriesDrinkLoading , setCategoriesDrinkError } = actions;
export default reducer;