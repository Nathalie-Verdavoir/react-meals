const mealsByLetterAction = (payload) => {
    return {
        type: "SET_MEALS_BY_LETTER",
        payload: payload
    }
}

const loadingMealsByLetterAction = () => {
    return {
        type: "SET_MEALS_BY_LETTER_LOADING",
    }
}

const onErrorMealsByLetterAction = () => {
    return {
        type:"SET_MEALS_BY_LETTER_ERROR"
    }
}

export {
    mealsByLetterAction,
    loadingMealsByLetterAction,
    onErrorMealsByLetterAction
}