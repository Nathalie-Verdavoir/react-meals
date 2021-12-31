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

export {
    mealsByCategoriesAction,
    loadingMealsByCategoriesAction
}