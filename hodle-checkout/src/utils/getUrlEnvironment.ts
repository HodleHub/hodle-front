export const getUrlEnvironment = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'http://localhost:3001'
  }

  return 'http://localhost:3001'
}
