import {
  useEffect,
  useState,
} from 'react'

import type { ReactNode } from 'react'

import { supabase } from '../services/supabase'

import type { User } from '../types/user'

import { AuthContext } from './AuthContextData'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] =
    useState<User | null>(null)

  useEffect(() => {
    async function loadUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session?.user) {
        setUser({
          id: session.user.id,
          email:
            session.user.email || '',
        })
      }
    }

    loadUser()

    const {
      data: authListener,
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email:
              session.user.email || '',
          })
        } else {
          setUser(null)
        }
      },
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}