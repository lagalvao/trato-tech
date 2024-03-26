import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './categories/categoriesSlice'
import itemsSlice from './items/itemsSlice'
import { Category } from './categories/types'
import { Items } from './items/types'

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
  },
})

export interface ApplicationState {
  categories: Category[]
  items: Items[]
}

export default store
