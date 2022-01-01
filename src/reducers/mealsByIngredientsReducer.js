const initialState = {
    mealsByIngredients: null,
    isLoading: false,
    isOnError: false
}

const mealsByIngredientsReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_MEALS_BY_INGREDIENTS_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_MEALS_BY_INGREDIENTS":
            return {
                ...state,
                mealsByIngredients: {
                    ...state.mealsByIngredients,
                    [action.payload[1]] : action.payload[0]
                },
                isLoading: false
            }
        
        case "SET_MEALS_BY_INGREDIENTS_ERROR":
            return {
                ...state,
                mealsByIngredients: {...state.mealsByIngredients},
                isLoading: false,
                isOnError: true
            }
        
        default:
            return state
    }
}

export default mealsByIngredientsReducer;