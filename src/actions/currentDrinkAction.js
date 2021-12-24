const currentDrinkAction = (payload) => {
    return {
        type: "SET_CURRENT_DRINK",
        payload: payload
    }
}

const loadingCurrentDrinkAction = () => {
    return {
        type: "SET_CURRENT_DRINK_LOADING"
    }
}

const onErrorCurrentDrinkAction = () => {
    return {
        type:"SET_CURRENT_DRINK_ERROR"
    }
}

export {
    currentDrinkAction,
    loadingCurrentDrinkAction,
    onErrorCurrentDrinkAction
}