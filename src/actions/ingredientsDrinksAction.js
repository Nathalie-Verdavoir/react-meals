const ingredientsDrinksAction = (payload) => {
    return {
        type: "SET_INGREDIENTS_DRINKS",
        payload: payload
    }
}

const loadingIngredientsDrinksAction = () => {
    return {
        type: "SET_INGREDIENTS_DRINKS_LOADING",
    }
}

export {
    ingredientsDrinksAction,
    loadingIngredientsDrinksAction
}