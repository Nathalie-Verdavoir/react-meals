import { createSlice } from '@reduxjs/toolkit/';
const currentDrinkSlice = createSlice({
    name: "currentDrink",
    initialState: {
        currentDrink: null,
        isCurrentDrinkLoading: false,
        isCurrentDrinkOnError: false
    },
    reducers: {
        setCurrentDrink: (state, action) => {
            state.currentDrink = {...state.currentDrink, [action.payload.idDrink] : action.payload }
            state.isCurrentDrinkLoading = false;
        },
        setCurrentDrinkLoading: state => {
            state.isCurrentDrinkLoading = true;
        },
        setCurrentDrinkError: state => {
            state = {...state, currentDrink: {...state.currentDrink}, isCurrentDrinkLoading: false, isCurrentDrinkOnError: true}
        },
    }
});
const { actions, reducer } = currentDrinkSlice
export const { setCurrentDrink , setCurrentDrinkLoading , setCurrentDrinkError } = actions;
export default reducer;