import {
  Button,
  BuyButton,
  CartContainer,
  Content,
  InfoDiv,
  PorductContainer,
  ProductImageContainer,
  ProductWrapper,
  Title,
} from '../styles/pages/cart'

import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'
import Image from 'next/future/image'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { convertToReal } from '../utils/formatter'
import { useState } from 'react'
import axios from 'axios'

export function Cart() {
  const { cartItems, totalPrice, removeFromCart } = useShoppingCart()
  const [isCreatingCheckiutSession, setIsCreatingCheckiutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckiutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      console.log(response.data)

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observalidade (Datadog / Sentry)
      setIsCreatingCheckiutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <CartContainer>
      <Dialog.Root>
        <Button>
          <div>{cartItems.length}</div>
          <Handbag size={24} color="#8D8D99" weight="bold" />
        </Button>

        <Dialog.Portal>
          <Dialog.Overlay />
          <Content>
            <Title>Sacola de compras</Title>
            <ProductWrapper>
              {cartItems.map((item) => {
                return (
                  <PorductContainer key={item.id}>
                    <ProductImageContainer>
                      <Image
                        src={item.imageUrl}
                        width={94}
                        height={94}
                        alt=""
                      />
                    </ProductImageContainer>
                    <div>
                      <h2>{item.name}</h2>
                      <strong>{item.price}</strong>
                      <button onClick={() => removeFromCart(item.id)}>
                        Remover
                      </button>
                    </div>
                  </PorductContainer>
                )
              })}
            </ProductWrapper>
            <footer>
              <div>
                <InfoDiv>
                  <span>Quantidade</span>
                  <span>
                    {cartItems.length === 1
                      ? `${cartItems.length} iten`
                      : `${cartItems.length} itens`}
                  </span>
                </InfoDiv>
                <InfoDiv>
                  <h4>Valor total</h4>
                  <strong>{convertToReal(totalPrice)}</strong>
                </InfoDiv>
              </div>

              <BuyButton
                disabled={cartItems.length === 0 || isCreatingCheckiutSession}
                onClick={handleBuyProduct}
              >
                Finalizar compra
              </BuyButton>
            </footer>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </CartContainer>
  )
}
