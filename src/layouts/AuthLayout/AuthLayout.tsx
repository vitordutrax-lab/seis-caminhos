import type { ReactNode } from 'react'

import './AuthLayout.css'

interface AuthLayoutProps {
  children: ReactNode
  customClass?: string
}

export function AuthLayout({
  children,
  customClass,
}: AuthLayoutProps) {
  return (
    <div className="auth-layout">
      <div className="auth-background" />

      <div
        className={
          customClass
            ? `auth-card ${customClass}`
            : 'auth-card'
        }
      >
        {children}
      </div>
    </div>
  )
}