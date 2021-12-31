const mealsByCategoriesAction = (payload) => {
    return {
        type: "SET_MEALS_BY_CATEGORIES",
        payload: payload
    }
}

const loadingMealsByCategoriesAction = () => {
    return {
        type: "SET_MEALS_BY_CATEGORIES_LOADING",
    }
}

const onErrorMealsByCategoriesAction = () => {
    return {
        type:"SET_MEALS_BY_CATEGORIES_ERROR"
    }
}

export {
    mealsByCategoriesAction,
    loadingMealsByCategoriesAction,
    onErrorMealsByCategoriesAction
}