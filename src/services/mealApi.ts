import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import { CurrentMeal } from './types'

// Define a service using a base URL and expected endpoints
export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getCurrentMeal: builder.query({
      query: (strMeal) => `lookup.php?i=${strMeal}`,
    }),
    getMealsByLetter: builder.query({
      query: (letter) => `search.php?f=${letter}`,
    }),
    getRandomMeal: builder.query({
      query: (random) => `random.php?date=${random}`,
    }),
    getMealsByCategories: builder.query({
      query: (strCategory) => `filter.php?c=${strCategory}`,
    }),
    getCategoriesMeal: builder.query({
      query: () => `categories.php`,
    }),
    getIngredientsMeal: builder.query({
      query: () => `list.php?i=list`,
    }),
    getMealsByIngredients: builder.query({
      query: (strIngredientsDrinks) => `filter.php?i=${strIngredientsDrinks}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetCurrentMealQuery,
  useGetMealsByLetterQuery,
  useGetRandomMealQuery,
  useGetMealsByCategoriesQuery,
  useGetCategoriesMealQuery,
  useGetIngredientsMealQuery,
  useGetMealsByIngredientsQuery,
  } = mealApi