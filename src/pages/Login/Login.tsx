import {
  useState,
  type FormEvent,
} from 'react'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
} from 'react-icons/fa'

import { AuthLayout } from '../../layouts/AuthLayout'

import { signIn } from '../../services/authService'

import './Login.css'

export function Login() {
  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [showPassword, setShowPassword] =
    useState(false)

  const [error, setError] =
    useState('')

  const navigate = useNavigate()

  async function handleLogin(
    event: FormEvent,
  ) {
    event.preventDefault()

    setError('')

    const response = await signIn({
      email,
      password,
    })

    if (response.error) {
      setError(
        'E-mail ou senha inválidos',
      )

      return
    }

    navigate('/inicio')
  }

  return (
    <AuthLayout>
      <div className="login-container">
        <h1 className="login-title">
          Seis Caminhos
        </h1>

        <div className="auth-tabs">
          <Link
            className="auth-tab active"
            to="/conectar"
          >
            CONECTAR
          </Link>

          <Link
            className="auth-tab"
            to="/registrar"
          >
            CADASTRAR
          </Link>
        </div>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >
          <div className="login-input-wrapper">
            <FaEnvelope className="login-input-icon" />

            <input
              className="login-input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value,
                )
              }
            />
          </div>

          <div className="login-input-wrapper">
            <FaLock className="login-input-icon" />

            <input
              className="login-input"
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              placeholder="Senha"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value,
                )
              }
            />

            <button
              className="password-toggle"
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword,
                )
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            className="login-button"
            type="submit"
          >
            CONECTAR
          </button>

          <div className="login-links">
            <Link to="/recuperar-senha">
              Esqueci minha senha
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}