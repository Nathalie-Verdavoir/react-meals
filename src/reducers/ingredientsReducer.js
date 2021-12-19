const initialState = {
    ingredients: null,
    isLoading: false
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
        
        default:
            return state
    }
}

export default ingredientsReducer;