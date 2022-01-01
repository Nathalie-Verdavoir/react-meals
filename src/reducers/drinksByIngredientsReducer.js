const initialState = {
    drinksByIngredients: null,
    isLoading: false,
    isOnError: false
}

const drinksByIngredientsReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_DRINKS_BY_INGREDIENTS_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_DRINKS_BY_INGREDIENTS":
            return {
                ...state,
                drinksByIngredients: {
                    ...state.drinksByIngredients,
                    [action.payload[1]] : action.payload[0]
                },
                isLoading: false
            }
        
        case "SET_DRINKS_BY_INGREDIENTS_ERROR":
            return {
                ...state,
                drinksByIngredients: {...state.drinksByIngredients},
                isLoading: false,
                isOnError: true
            }
        
        default:
            return state
    }
}

export default drinksByIngredientsReducer;