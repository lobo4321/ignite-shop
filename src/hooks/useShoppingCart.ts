import { useContext } from 'react'
import { ShoppingCartContext } from '../context/CartContext'

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
