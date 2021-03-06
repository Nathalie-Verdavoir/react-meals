import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import { CurrentDrink } from './types'

// Define a service using a base URL and expected endpoints
export const drinkApi = createApi({
  reducerPath: 'drinkApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getCurrentDrink: builder.query({
      query: (strDrink) => `lookup.php?i=${strDrink}`,
    }),
    getDrinksByLetter: builder.query({
      query: (letter) => `search.php?f=${letter}`,
    }),
    getRandomDrink: builder.query({
      query: (random) => `random.php?date=${random}`,
    }),
    getDrinksByCategories: builder.query({
      query: (strCategory) => `filter.php?c=${strCategory}`,
    }),
    getCategoriesDrink: builder.query({
      query: () => `list.php?c=list`,
    }),
    getIngredientsDrink: builder.query({
      query: () => `list.php?i=list`,
    }),
    getDrinksByIngredients: builder.query({
      query: (strIngredientsDrinks) => `filter.php?i=${strIngredientsDrinks}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetCurrentDrinkQuery, 
  useGetDrinksByLetterQuery, 
  useGetRandomDrinkQuery, 
  useGetDrinksByCategoriesQuery,
  useGetCategoriesDrinkQuery,
  useGetIngredientsDrinkQuery,
  useGetDrinksByIngredientsQuery,
} = drinkApi