const currentMealAction = (payload) => {
    return {
        type: "SET_CURRENT_MEAL",
        payload: payload
    }
}

const loadingCurrentMealAction = () => {
    return {
        type: "SET_CURRENT_MEAL_LOADING",
    }
}

export {
    currentMealAction,
    loadingCurrentMealAction
}