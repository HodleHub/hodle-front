export const getUrlEnvironment = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://cryptouse.com.br'
  }

  return 'http://localhost:3000'
}
