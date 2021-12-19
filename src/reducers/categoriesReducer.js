const initialState = {
    categories: null,
    isLoading: false
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
        
        default:
            return state
    }
}

export default categoriesReducer;