import { categoriesAction, loadingCategoriesAction, onErrorCategoriesAction }  from './categoriesAction';
import { ingredientsAction, loadingIngredientsAction, onErrorIngredientsAction }  from './ingredientsAction';
import { currentMealAction, loadingCurrentMealAction, onErrorCurrentMealAction }  from './currentMealAction';
import { mealsByCategoriesAction, loadingMealsByCategoriesAction, onErrorMealsByCategoriesAction }  from './mealsByCategoriesAction';
import { categoriesDrinksAction, loadingCategoriesDrinksAction, onErrorCategoriesDrinksAction }  from './categoriesDrinkAction';
import { ingredientsDrinksAction, loadingIngredientsDrinksAction, onErrorIngredientsDrinksAction }  from './ingredientsDrinksAction';
import { currentDrinkAction, loadingCurrentDrinkAction, onErrorCurrentDrinkAction }  from './currentDrinkAction';
import { drinksByCategoriesAction, loadingDrinksByCategoriesAction, onErrorDrinksByCategoriesAction }  from './drinksByCategoriesAction';

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

    mealsByCategoriesAction,
    loadingMealsByCategoriesAction,
    onErrorMealsByCategoriesAction,

    categoriesDrinksAction,
    loadingCategoriesDrinksAction,
    onErrorCategoriesDrinksAction,

    ingredientsDrinksAction,
    loadingIngredientsDrinksAction,
    onErrorIngredientsDrinksAction,

    currentDrinkAction,
    loadingCurrentDrinkAction,
    onErrorCurrentDrinkAction,

    drinksByCategoriesAction,
    loadingDrinksByCategoriesAction,
    onErrorDrinksByCategoriesAction
}

export default allActions;