const initialState = {
    mealsByCategories: null,
    isLoading: false
}

const mealsByCategoriesReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_CURRENT_MEAL_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_CURRENT_MEAL":
            return {
                ...state,
                mealsByCategories: action.payload,
                isLoading: false
            }
        
        default:
            return state
    }
}

export default mealsByCategoriesReducer;