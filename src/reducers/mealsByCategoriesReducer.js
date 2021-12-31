const initialState = {
    mealsByCategories: null,
    isLoading: false,
    isOnError: false
}

const mealsByCategoriesReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_MEALS_BY_CATEGORIES_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_MEALS_BY_CATEGORIES":
            return {
                ...state,
                mealsByCategories: {
                    ...state.mealsByCategories,
                    [action.payload[1]] : action.payload[0]
                },
                isLoading: false
            }
        
        case "SET_MEALS_BY_CATEGORIES_ERROR":
            return {
                ...state,
                mealsByCategories: {...state.mealsByCategories},
                isLoading: false,
                isOnError: true
            }
        
        default:
            return state
    }
}

export default mealsByCategoriesReducer;