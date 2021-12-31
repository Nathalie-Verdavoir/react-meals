const initialState = {
    drinksByCategories: null,
    isLoading: false,
    isOnError:false
}

const drinksByCategoriesReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_DRINKS_BY_CATEGORIES_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_DRINKS_BY_CATEGORIES":
            return {
                ...state,
                drinksByCategories: {
                    ...state.drinksByCategories,
                    [action.payload[1]] : action.payload[0]
                },
                isLoading: false
            }
        
        case "SET_DRINKS_BY_CATEGORIES_ERROR":
            return {
                ...state,
                drinksByCategories: {...state.drinksByCategories},
                isLoading: false,
                isOnError: true
            }
            
        default:
            return state
    }
}

export default drinksByCategoriesReducer;