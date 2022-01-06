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
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentMealQuery } = mealApi