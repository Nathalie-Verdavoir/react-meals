const ingredientsAction = (payload) => {
    return {
        type: "SET_INGREDIENTS",
        payload: payload
    }
}

const loadingIngredientsAction = () => {
    return {
        type: "SET_INGREDIENTS_LOADING",
    }
}

export {
    ingredientsAction,
    loadingIngredientsAction
}