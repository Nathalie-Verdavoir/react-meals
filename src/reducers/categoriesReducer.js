const initialState = {
    categories: null,
    isLoading: false,
    isOnError: false
}

const categoriesReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_GATEGORIES_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_GATEGORIES":
            return {
                ...state,
                categories: action.payload,
                isLoading: false
            }
        
        case "SET_GATEGORIES_ERROR":
            return {
                ...state,
                categories: {...state.categories},
                isLoading: false,
                isOnError: true
            }   

        default:
            return state
    }
}

export default categoriesReducer;