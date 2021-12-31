const categoriesDrinksAction = (payload) => {
    return {
        type: "SET_GATEGORIES_DRINKS",
        payload: payload
    }
}

const loadingCategoriesDrinksAction = () => {
    return {
        type: "SET_GATEGORIES_DRINKS_LOADING",
    }
}

const onErrorCategoriesDrinksAction = () => {
    return {
        type:"SET_GATEGORIES_DRINKS_ERROR"
    }
}

export {
    categoriesDrinksAction,
    loadingCategoriesDrinksAction,
    onErrorCategoriesDrinksAction
}
