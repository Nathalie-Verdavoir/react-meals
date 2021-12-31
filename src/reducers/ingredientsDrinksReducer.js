const initialState = {
    ingredientsDrinks: null,
    isLoading: false,
    isOnError: false
}

const ingredientsDrinksReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_INGREDIENTS_DRINKS_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_INGREDIENTS_DRINKS":
            return {
                ...state,
                ingredientsDrinks: action.payload,
                isLoading: false
            }
        
        case "SET_INGREDIENTS_DRINKS_ERROR":
            return {
                ...state,
                ingredientsDrinks: {...state.ingredientsDrinks},
                isLoading: false,
                isOnError: true
            }

        default:
            return state
    }
}

export default ingredientsDrinksReducer;