import categoriesMeal from '../slices/categoriesMealSlice';
import ingredientsReducer from './ingredientsReducer';
import currentMeal from '../slices/currentMealSlice';
import mealsByCategories from '../slices/mealsByCategoriesSlice';
import mealsByIngredients from '../slices/mealsByIngredientsSlice';
import mealsByLetter from "../slices/mealsByLetterSlice";
import categoriesDrink from '../slices/categoriesDrinkSlice';
import ingredientsDrink from '../slices/ingredientsDrinkSlice';
import currentDrink from '../slices/currentDrinkSlice';
import drinksByCategories from "../slices/drinksByCategoriesSlice";
import drinksByIngredients from "../slices/drinksByIngredientsSlice";
import drinksByLetter from "../slices/drinksByLetterSlice";
import { mealApi } from '../services/mealApi';
import { drinkApi } from '../services/drinkApi';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    [drinkApi.reducerPath]: drinkApi.reducer,
    [mealApi.reducerPath]: mealApi.reducer,
    categoriesMeal,
    ingredientsReducer,
    currentMeal,
    mealsByCategories,
    mealsByIngredients,
    mealsByLetter,
    categoriesDrink,
    ingredientsDrink,
    currentDrink,
    drinksByCategories,
    drinksByIngredients,
    drinksByLetter
})

export default rootReducer