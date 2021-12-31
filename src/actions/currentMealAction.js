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

const onErrorCurrentMealAction = () => {
    return {
        type:"SET_CURRENT_MEAL_ERROR"
    }
}

export {
    currentMealAction,
    loadingCurrentMealAction,
    onErrorCurrentMealAction
}