import { createContext, ReactNode, useState } from 'react'

interface ShoppingCartProviderProps {
  children: ReactNode
}

export interface CartItemProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
  priceNumber?: number
}

interface ShoppingCartContextProps {
  addToCart: (product: CartItemProps) => void
  removeFromCart: (id: string) => void
  cartItems: CartItemProps[]
  totalPrice: number
  checkCartItemInCart: (id: string) => boolean
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  function addToCart(product: CartItemProps) {
    return setCartItems((state) => [...state, product])
  }

  function removeFromCart(id: string) {
    setCartItems((state) => state.filter((item) => item.id !== id))
  }

  const totalPrice = cartItems.reduce(
    (total, product: CartItemProps) => total + product.priceNumber,
    0,
  )

  function checkCartItemInCart(id: string) {
    return cartItems.some((item) => item.id === id)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        checkCartItemInCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
