const initialState = {
    mealsByLetter: null,
    isLoading: false,
    isOnError: false
}

const mealsByLetterReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_MEALS_BY_LETTER_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_MEALS_BY_LETTER":
            return {
                ...state,
                mealsByLetter: {
                    ...state.mealsByLetter,
                    [action.payload[1]] : action.payload[0]
                },
                isLoading: false
            }
        
        case "SET_MEALS_BY_LETTER_ERROR":
            return {
                ...state,
                mealsByLetter: {...state.mealsByLetter},
                isLoading: false,
                isOnError: true
            }
        
        default:
            return state
    }
}

export default mealsByLetterReducer;