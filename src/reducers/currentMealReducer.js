const initialState = {
    currentMeal: null,
    isLoading: false
}

const currentMealReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_CURRENT_MEAL_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_CURRENT_MEAL":
            return {
                ...state,
                currentMeal: action.payload,
                isLoading: false
            }
        
        default:
            return state
    }
}

export default currentMealReducer;