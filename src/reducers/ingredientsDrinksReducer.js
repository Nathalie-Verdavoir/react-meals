const initialState = {
    ingredientsDrinks: null,
    isLoading: false
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
        
        default:
            return state
    }
}

export default ingredientsDrinksReducer;