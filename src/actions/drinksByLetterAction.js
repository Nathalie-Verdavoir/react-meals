const drinksByLetterAction = (payload) => {
    return {
        type: "SET_DRINKS_BY_LETTER",
        payload: payload
    }
}

const loadingDrinksByLetterAction = () => {
    return {
        type: "SET_DRINKS_BY_LETTER_LOADING",
    }
}

const onErrorDrinksByLetterAction = () => {
    return {
        type:"SET_DRINKS_BY_LETTER_ERROR"
    }
}

export {
    drinksByLetterAction,
    loadingDrinksByLetterAction,
    onErrorDrinksByLetterAction
}