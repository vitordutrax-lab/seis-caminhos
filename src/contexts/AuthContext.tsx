import {
  createContext,
  useContext,
} from 'react'

import type { ReactNode } from 'react'

import type { User } from '../types/user'

interface AuthContextData {
  user: User | null
}

const AuthContext =
  createContext<AuthContextData>({
    user: null,
  })

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}