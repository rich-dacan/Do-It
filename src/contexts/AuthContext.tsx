import { createContext, ReactNode, useCallback, useContext, useState } from  'react'

import { api } from '../services/api'

interface AuthProviderProps {
  children: ReactNode,
}

interface User {
  name: string,
  id: string,
  email: string,
}

interface AuthState {
  accessToken: string,
  user: User,
}

interface SignInCredentials {
  email: string,
  password: string,
}

interface AuthContextData {
  user: User,
  token: string,
  signIn: ( credentials: SignInCredentials ) => Promise<void>,
  signOut: () => void
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const useAuth = () => {

  const context = useContext(AuthContext)

  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider!")
  }

  return context
}

const AuthProvider = ( { children }: AuthProviderProps ) => {

  const [data, setData] = useState<AuthState>(() => {

    const accessToken = localStorage.getItem("@Doit:accessToken")
    const user        = localStorage.getItem("@Doit:user")

    if( accessToken && user ) {
      return { accessToken, user: JSON.parse(user)}
    }

    return {} as AuthState
  })

  const signIn = useCallback( async ({ email, password }: SignInCredentials) => {

    const response = await api.post( "/login", { email, password })

    const { accessToken, user } = response.data

    localStorage.setItem("@Doit:accessToken", accessToken)
    localStorage.setItem("@Doit:user", JSON.stringify( user ))

    setData({ accessToken, user })

  }, [])

  const signOut = useCallback(() => {

    localStorage.removeItem("@Doit:accessToken")
    localStorage.removeItem("@Doit:user")

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      token: data.accessToken,
      user: data.user,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }