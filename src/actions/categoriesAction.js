const categoriesAction = (payload) => {
    return {
        type: "SET_GATEGORIES",
        payload: payload
    }
}

const loadingCategoriesAction = () => {
    return {
        type: "SET_GATEGORIES_LOADING",
    }
}

export {
    categoriesAction,
    loadingCategoriesAction
}
