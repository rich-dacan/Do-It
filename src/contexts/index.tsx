import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { AuthProvider } from './AuthContext'

interface AppProviderProps {
  children: ReactNode,
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>

      <ChakraProvider theme={theme}> { children }</ChakraProvider>

    </AuthProvider>
  )
}
