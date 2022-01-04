import { createSlice } from '@reduxjs/toolkit/';
const categoriesMealSlice = createSlice({
    name: "categoriesMeal",
    initialState: {
        categoriesMeal: null,
        isCategoriesMealLoading: false,
        isCategoriesMealOnError: false
    },
    reducers: {
        setCategoriesMeal: (state, action) => {
            state.categoriesMeal = action.payload;
            state.isCategoriesMealLoading = false;
        },
        setCategoriesMealLoading: state => {
            state.isCategoriesMealLoading = true;
        },
        setCategoriesMealError: state => {
            state = {...state, categoriesMeal: {...state.categoriesMeal}, isCategoriesMealLoading: false, isCategoriesMealOnError: true}
        },
    }
});
const { actions, reducer } = categoriesMealSlice
export const { setCategoriesMeal , setCategoriesMealLoading , setCategoriesMealError } = actions;
export default reducer;