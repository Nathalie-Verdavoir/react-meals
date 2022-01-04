import { categoriesAction, loadingCategoriesAction, onErrorCategoriesAction }  from './categoriesAction';
import { ingredientsAction, loadingIngredientsAction, onErrorIngredientsAction }  from './ingredientsAction';
import { categoriesDrinksAction, loadingCategoriesDrinksAction, onErrorCategoriesDrinksAction }  from './categoriesDrinkAction';
import { ingredientsDrinksAction, loadingIngredientsDrinksAction, onErrorIngredientsDrinksAction }  from './ingredientsDrinksAction';

const allActions = {
    categoriesAction,
    loadingCategoriesAction,
    onErrorCategoriesAction,

    ingredientsAction,
    loadingIngredientsAction,
    onErrorIngredientsAction,

    categoriesDrinksAction,
    loadingCategoriesDrinksAction,
    onErrorCategoriesDrinksAction,

    ingredientsDrinksAction,
    loadingIngredientsDrinksAction,
    onErrorIngredientsDrinksAction
}

export default allActions;