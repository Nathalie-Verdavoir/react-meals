const mealsByIngredientsAction = (payload) => {
    return {
        type: "SET_MEALS_BY_INGREDIENTS",
        payload: payload
    }
}

const loadingMealsByIngredientsAction = () => {
    return {
        type: "SET_MEALS_BY_INGREDIENTS_LOADING",
    }
}

const onErrorMealsByIngredientsAction = () => {
    return {
        type:"SET_MEALS_BY_INGREDIENTS_ERROR"
    }
}

export {
    mealsByIngredientsAction,
    loadingMealsByIngredientsAction,
    onErrorMealsByIngredientsAction
}