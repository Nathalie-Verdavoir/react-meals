const initialState = {
    categoriesDrinks: null,
    isLoading: false,
    isOnError: false
}

const categoriesDrinksReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_GATEGORIES_DRINKS_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_GATEGORIES_DRINKS":
            return {
                ...state,
                categoriesDrinks: action.payload,
                isLoading: false
            }

        case "SET_GATEGORIES_ERROR":
            return {
                ...state,
                categoriesDrinks: {...state.categoriesDrinks},
                isLoading: false,
                isOnError: true
            }   
    
        default:
            return state
    }
}

export default categoriesDrinksReducer;