import {
  ImageContainer,
  ImageWrapper,
  SuccessContainer,
} from '../styles/pages/success'

import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/future/image'
import Head from 'next/head'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
  productsImages: string[]
}

export default function Success({
  customerName,
  product,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        <ImageWrapper>
          {productsImages.map((image) => {
            return (
              <ImageContainer key={image}>
                <Image src={image} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </ImageWrapper>

        <p>
          Uhuul <strong>{customerName}</strong> , sua compra de{' '}
          {productsImages.length}{' '}
          {productsImages.length > 1 ? 'camisetas' : 'camiseta'} já está a
          caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálago</Link>
      </SuccessContainer>
    </>
  )
}

// Client-side (useEffect) / getServerSideProps / getStaticProps

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productsImages,
    },
  }
}
