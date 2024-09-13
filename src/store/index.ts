import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './categories/categoriesSlice'
import cartSlice from './cart/cartSlice'
import itemsSlice from './items/itemsSlice'
import { Category } from './categories/types'
import { Items } from './items/types'
import { Cart } from './cart/types'

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    cart: cartSlice,
  },
})

export interface ApplicationState {
  categories: Category[]
  items: Items[]
  cart: Cart[]
}

export default store
