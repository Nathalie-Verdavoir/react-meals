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

const onErrorIngredientsAction = () => {
    return {
        type:"SET_INGREDIENTS_ERROR"
    }
}

export {
    ingredientsAction,
    loadingIngredientsAction,
    onErrorIngredientsAction
}