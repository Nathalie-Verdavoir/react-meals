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

export {
    categoriesDrinksAction,
    loadingCategoriesDrinksAction
}
