const initialState = {
    currentMeal: null,
    isLoading: false,
    isOnError: false
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
                currentMeal: {
                    ...state.currentMeal,
                    [action.payload.idMeal] : action.payload
                },
                isLoading: false
            }
        
        case "SET_CURRENT_MEAL_ERROR":
            return {
                ...state,
                currentMeal: {...state.currentMeal},
                isLoading: false,
                isOnError: true
            }
             
        default:
            return state
    }
}

export default currentMealReducer;