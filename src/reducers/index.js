import categoriesReducer from './categoriesReducer';
import ingredientsReducer from './ingredientsReducer';
import currentMealReducer from './currentMealReducer';
import mealsByCategoriesReducer from './mealsByCategoriesReducer';
import mealsByIngredientsReducer from './mealsByIngredientsReducer';
import mealsByLetterReducer from './mealsByLetterReducer';
import categoriesDrinksReducer from './categoriesDrinksReducer';
import ingredientsDrinksReducer from './ingredientsDrinksReducer';
import currentDrinkReducer from './currentDrinkReducer';
import drinksByCategoriesReducer from "./drinksByCategoriesReducer";
import drinksByIngredientsReducer from "./drinksByIngredientsReducer";
import drinksByLetterReducer from "./drinksByLetterReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    categoriesReducer,
    ingredientsReducer,
    currentMealReducer,
    mealsByCategoriesReducer,
    mealsByIngredientsReducer,
    mealsByLetterReducer,
    categoriesDrinksReducer,
    ingredientsDrinksReducer,
    currentDrinkReducer,
    drinksByCategoriesReducer,
    drinksByIngredientsReducer,
    drinksByLetterReducer
})

export default rootReducer