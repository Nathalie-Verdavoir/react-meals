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

const onErrorIngredientsDrinksAction = () => {
    return {
        type:"SET_INGREDIENTS_DRINKS_ERROR"
    }
}

export {
    ingredientsDrinksAction,
    loadingIngredientsDrinksAction,
    onErrorIngredientsDrinksAction
}