const initialState = {
    ingredients: null,
    isLoading: false,
    isOnError: false
}

const ingredientsReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_INGREDIENTS_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_INGREDIENTS":
            return {
                ...state,
                ingredients: action.payload,
                isLoading: false
            }
        
        case "SET_INGREDIENTS_ERROR":
            return {
                ...state,
                ingredients: {...state.ingredients},
                isLoading: false,
                isOnError: true
            }
        
        default:
            return state
    }
}

export default ingredientsReducer;