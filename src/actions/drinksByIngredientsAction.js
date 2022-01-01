const drinksByIngredientsAction = (payload) => {
    return {
        type: "SET_DRINKS_BY_INGREDIENTS",
        payload: payload
    }
}

const loadingDrinksByIngredientsAction = () => {
    return {
        type: "SET_DRINKS_BY_INGREDIENTS_LOADING",
    }
}

const onErrorDrinksByIngredientsAction = () => {
    return {
        type:"SET_DRINKS_BY_INGREDIENTS_ERROR"
    }
}

export {
    drinksByIngredientsAction,
    loadingDrinksByIngredientsAction,
    onErrorDrinksByIngredientsAction
}