import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Contanier } from '../styles/pages/app'

import { ShoppingCartProvider } from '../context/CartContext'
import { HeaderComponent } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Contanier>
        <HeaderComponent />
        <Component {...pageProps} />
      </Contanier>
    </ShoppingCartProvider>
  )
}
