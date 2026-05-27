import { createContext } from 'react'

import type { User } from '../types/user'

export interface AuthContextData {
  user: User | null
}

export const AuthContext =
  createContext<
    AuthContextData | undefined
  >(undefined)