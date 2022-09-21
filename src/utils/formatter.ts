export function convertToReal(number: number) {
  return number.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}
