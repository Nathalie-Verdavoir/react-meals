import { categoriesAction, loadingCategoriesAction }  from './categoriesAction';
import { ingredientsAction, loadingIngredientsAction }  from './ingredientsAction';
import { currentMealAction, loadingCurrentMealAction }  from './currentMealAction';
import { categoriesDrinksAction, loadingCategoriesDrinksAction }  from './categoriesDrinkAction';
import { ingredientsDrinksAction, loadingIngredientsDrinksAction }  from './ingredientsDrinksAction';

import { currentDrinkAction, loadingCurrentDrinkAction, onErrorCurrentDrinkAction }  from './currentDrinkAction';

const allActions = {
    categoriesAction,
    loadingCategoriesAction,
    ingredientsAction,
    loadingIngredientsAction,
    currentMealAction,
    loadingCurrentMealAction,
    categoriesDrinksAction,
    loadingCategoriesDrinksAction,
    ingredientsDrinksAction,
    loadingIngredientsDrinksAction,
    currentDrinkAction,
    loadingCurrentDrinkAction,
    onErrorCurrentDrinkAction
}

export default allActions;