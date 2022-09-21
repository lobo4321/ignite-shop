import Link from 'next/link'
import Image from 'next/future/image'

import { Header } from '../styles/pages/header'

import { Cart } from './Cart'

import logoImg from '../assets/logo.svg'
import { useShoppingCart } from '../hooks/useShoppingCart'

export function HeaderComponent() {
  const { cartItems } = useShoppingCart()

  return (
    <Header>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {cartItems.length !== 0 && <Cart />}
    </Header>
  )
}
