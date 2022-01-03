import { categoriesAction, loadingCategoriesAction, onErrorCategoriesAction }  from './categoriesAction';
import { ingredientsAction, loadingIngredientsAction, onErrorIngredientsAction }  from './ingredientsAction';
import { currentMealAction, loadingCurrentMealAction, onErrorCurrentMealAction }  from './currentMealAction';
import { categoriesDrinksAction, loadingCategoriesDrinksAction, onErrorCategoriesDrinksAction }  from './categoriesDrinkAction';
import { ingredientsDrinksAction, loadingIngredientsDrinksAction, onErrorIngredientsDrinksAction }  from './ingredientsDrinksAction';
import { currentDrinkAction, loadingCurrentDrinkAction, onErrorCurrentDrinkAction }  from './currentDrinkAction';

const allActions = {
    categoriesAction,
    loadingCategoriesAction,
    onErrorCategoriesAction,

    ingredientsAction,
    loadingIngredientsAction,
    onErrorIngredientsAction,

    currentMealAction,
    loadingCurrentMealAction,
    onErrorCurrentMealAction,

    categoriesDrinksAction,
    loadingCategoriesDrinksAction,
    onErrorCategoriesDrinksAction,

    ingredientsDrinksAction,
    loadingIngredientsDrinksAction,
    onErrorIngredientsDrinksAction,

    currentDrinkAction,
    loadingCurrentDrinkAction,
    onErrorCurrentDrinkAction
}

export default allActions;