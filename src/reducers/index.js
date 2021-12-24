import categoriesReducer from './categoriesReducer';
import ingredientsReducer from './ingredientsReducer';
import currentMealReducer from './currentMealReducer';
import categoriesDrinksReducer from './categoriesDrinksReducer';
import ingredientsDrinksReducer from './ingredientsDrinksReducer';
import currentDrinkReducer from './currentDrinkReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    categoriesReducer,
    ingredientsReducer,
    currentMealReducer,
    categoriesDrinksReducer,
    ingredientsDrinksReducer,
    currentDrinkReducer
})

export default rootReducer