const initialState = {
    currentDrink: null,
    isLoading: false,
    isOnError: false
}

const currentDrinkReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_CURRENT_DRINK_LOADING":
            return {
                ...state,
                isLoading: true,
                isOnError: false
            }     

        case "SET_CURRENT_DRINK":
            return {
                ...state,
                currentDrink: {
                    ...state.currentDrink,
                    [action.payload.idDrink] : action.payload
                },
                isLoading: false
            }
        
        case "SET_CURRENT_DRINK_ERROR":
            return {
                ...state,
                currentDrink: null,
                isLoading: false,
                isOnError: true
            }
        
        default:
            return state
    }
}

export default currentDrinkReducer;