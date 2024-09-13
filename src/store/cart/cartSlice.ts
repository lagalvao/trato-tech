import { createSlice } from '@reduxjs/toolkit'
import { Cart } from './types'

const initialState: Cart[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, { payload }) => {
      const haveItem = state.some((item) => item.id === payload)

      if (!haveItem)
        return [
          ...state,
          {
            id: payload,
            amount: 1,
          },
        ]

      return state.filter((item) => item.id !== payload)
    },
  },
})

export const { changeCart } = cartSlice.actions

export default cartSlice.reducer
