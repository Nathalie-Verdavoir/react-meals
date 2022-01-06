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
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentDrinkQuery , useGetDrinksByLetterQuery } = drinkApi