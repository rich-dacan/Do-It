import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

interface AppProviderProps {
  children: ReactNode,
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ChakraProvider theme={theme}> { children }</ChakraProvider>
  )
}
