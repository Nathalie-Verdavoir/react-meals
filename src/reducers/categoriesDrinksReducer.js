const initialState = {
    categoriesDrinks: null,
    isLoading: false
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
        
        default:
            return state
    }
}

export default categoriesDrinksReducer;