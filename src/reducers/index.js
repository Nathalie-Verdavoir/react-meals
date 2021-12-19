import categoriesReducer from './categoriesReducer';
import ingredientsReducer from './ingredientsReducer';
import currentMealReducer from './currentMealReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    categoriesReducer,
    ingredientsReducer,
    currentMealReducer
})

export default rootReducer