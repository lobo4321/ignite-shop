import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Contanier, Header } from '../styles/pages/app'

import Image from 'next/future/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Contanier>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Contanier>
  )
}
