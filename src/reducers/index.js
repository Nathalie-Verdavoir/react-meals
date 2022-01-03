import categoriesReducer from './categoriesReducer';
import ingredientsReducer from './ingredientsReducer';
import currentMealReducer from './currentMealReducer';
import mealsByCategories from '../slices/mealsByCategoriesSlice';
import mealsByIngredients from '../slices/mealsByIngredientsSlice';
import mealsByLetter from "../slices/mealsByLetterSlice";
import categoriesDrinksReducer from './categoriesDrinksReducer';
import ingredientsDrinksReducer from './ingredientsDrinksReducer';
import currentDrinkReducer from './currentDrinkReducer';
import drinksByCategories from "../slices/drinksByCategoriesSlice";
import drinksByIngredients from "../slices/drinksByIngredientsSlice";
import drinksByLetter from "../slices/drinksByLetterSlice";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    categoriesReducer,
    ingredientsReducer,
    currentMealReducer,
    mealsByCategories,
    mealsByIngredients,
    mealsByLetter,
    categoriesDrinksReducer,
    ingredientsDrinksReducer,
    currentDrinkReducer,
    drinksByCategories,
    drinksByIngredients,
    drinksByLetter
})

export default rootReducer