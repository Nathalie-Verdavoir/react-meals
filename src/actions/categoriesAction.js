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

const onErrorCategoriesAction = () => {
    return {
        type:"SET_GATEGORIES_ERROR"
    }
}

export {
    categoriesAction,
    loadingCategoriesAction,
    onErrorCategoriesAction
}
