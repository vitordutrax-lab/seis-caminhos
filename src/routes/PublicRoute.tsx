import type { ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

interface PublicRouteProps {
  children: ReactNode
}

export function PublicRoute({
  children,
}: PublicRouteProps) {
  const { user } = useAuth()

  if (user) {
    return <Navigate to="/lobby" />
  }

  return children
}