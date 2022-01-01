const initialState = {
    drinksByLetter: null,
    isLoading: false,
    isOnError: false
}

const drinksByLetterReducer = (state = initialState, action) => {
    switch(action.type){

        case "SET_DRINKS_BY_LETTER_LOADING":
            return {
                ...state,
                isLoading: true
            }     

        case "SET_DRINKS_BY_LETTER":
            return {
                ...state,
                drinksByLetter: {
                    ...state.drinksByLetter,
                    [action.payload[1]] : action.payload[0]
                },
                isLoading: false
            }
        
        case "SET_DRINKS_BY_LETTER_ERROR":
            return {
                ...state,
                drinksByLetter: {...state.drinksByLetter},
                isLoading: false,
                isOnError: true
            }
        
        default:
            return state
    }
}

export default drinksByLetterReducer;