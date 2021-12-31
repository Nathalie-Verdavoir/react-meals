const drinksByCategoriesAction = (payload) => {
    return {
        type: "SET_DRINKS_BY_CATEGORIES",
        payload: payload
    }
}

const loadingDrinksByCategoriesAction = () => {
    return {
        type: "SET_DRINKS_BY_CATEGORIES_LOADING",
    }
}

const onErrorDrinksByCategoriesAction = () => {
    return {
        type:"SET_DRINKS_BY_CATEGORIES_ERROR"
    }
}

export {
    drinksByCategoriesAction,
    loadingDrinksByCategoriesAction,
    onErrorDrinksByCategoriesAction
}