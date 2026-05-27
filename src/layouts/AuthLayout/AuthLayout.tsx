import type { ReactNode } from 'react'

import './AuthLayout.css'

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <div className="auth-layout">
      <div className="auth-background" />

      <div className="auth-card">
        {children}
      </div>
    </div>
  )
}