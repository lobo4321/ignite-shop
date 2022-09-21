import { styled } from '..'

import * as Dialog from '@radix-ui/react-dialog'

export const CartContainer = styled('div', {})

export const Button = styled(Dialog.Trigger, {
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray800',
  cursor: 'pointer',
  position: 'relative',

  div: {
    position: 'absolute',
    border: '20px solid transaparent',
    background: '$green300',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '700',
    top: -10,
    right: -10,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Content = styled(Dialog.Content, {
  background: '$gray800',
  width: '30rem',
  height: '100vh',
  padding: '4.5rem 3rem 3rem 3rem',
  position: 'fixed',
  top: 0,
  right: 0,
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  footer: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
  },
})

export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  fontWeight: 700,
  color: '$gray100',
})

export const BuyButton = styled('button', {
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})

export const InfoDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '0.5rem',

  span: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '$gray300',
  },

  h4: {
    fontSize: '$md',
    fontWeight: 700,
    color: '$gray100',
  },

  strong: {
    fontSize: '$lg',
    fontWeight: 700,
    color: '$gray100',
  },
})

export const ProductWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
})

export const PorductContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  h2: {
    fontSize: '$md',
    fontWeight: 400,
    color: '$gray300',
    lineHeight: '28px',
  },

  strong: {
    display: 'block',
    fontSize: '$md',
    fontWeight: 700,
    color: '$gray100',
    lineHeight: '28px',
    margin: '0.2rem 0rem',
  },

  button: {
    border: 0,
    background: 'transparent',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ProductImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})
