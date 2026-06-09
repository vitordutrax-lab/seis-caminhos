import {
  useState,
  type FormEvent,
} from 'react'

import { useNavigate } from 'react-router-dom'

import {
  FaEye,
  FaEyeSlash,
  FaLock,
} from 'react-icons/fa'

import { supabase } from '../../services/supabase'

import { AuthLayout } from '../../layouts/AuthLayout/AuthLayout'

import './ResetPassword.css'

export function ResetPassword() {
  const navigate = useNavigate()

  const [
    password,
    setPassword,
  ] = useState('')

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('')

  const [
    showPassword,
    setShowPassword,
  ] = useState(false)

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false)

  const [
    error,
    setError,
  ] = useState('')

  const [
    successMessage,
    setSuccessMessage,
  ] = useState('')

  const hasMinLength =
    password.length >= 8

  const hasUppercase =
    /[A-Z]/.test(password)

  const hasNumber =
    /[0-9]/.test(password)

  const passwordsMatch =
    password === confirmPassword &&
    confirmPassword.length > 0

  async function handleResetPassword(
    event: FormEvent,
  ) {
    event.preventDefault()

    setError('')

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')

      return
    }

    if (
      !hasMinLength ||
      !hasUppercase ||
      !hasNumber
    ) {
      setError(
        'A senha não atende os requisitos.',
      )

      return
    }

    const { error } =
      await supabase.auth.updateUser({
        password,
      })

    if (error) {
      setError(
        'Não foi possível redefinir a senha.',
      )

      return
    }

    setSuccessMessage(
      'Senha redefinida com sucesso!',
    )

    setTimeout(() => {
      navigate('/conectar')
    }, 5000)
  }

  return (
    <AuthLayout>
      <div className="reset-password-container">
        <h1 className="reset-password-title">
          Seis
          <br />
          Caminhos
        </h1>

        <div className="reset-password-tab">
          REDEFINIR SENHA
        </div>

        <form
          onSubmit={handleResetPassword}
          className="reset-password-form"
          autoComplete="off"
        >
          <input
            type="text"
            style={{
              display: 'none',
            }}
            autoComplete="username"
          />

          <input
            type="password"
            style={{
              display: 'none',
            }}
            autoComplete="new-password"
          />

          <div className="reset-password-input-wrapper">
            <FaLock className="reset-password-input-icon" />

            <input
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              name="hidden-field-password"
              placeholder="Nova senha"
              className="sc-input"
              autoComplete="new-password"
              spellCheck={false}
              data-lpignore="true"
              data-1p-ignore="true"
              data-bwignore="true"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value,
                )
              }
            />

            <button
              type="button"
              className="password-toggle"
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

          <div className="reset-password-input-wrapper">
            <FaLock className="reset-password-input-icon" />

            <input
              type={
                showConfirmPassword
                  ? 'text'
                  : 'password'
              }
              name="hidden-field-confirm-password"
              placeholder="Confirmar nova senha"
              className="sc-input"
              autoComplete="new-password"
              spellCheck={false}
              data-lpignore="true"
              data-1p-ignore="true"
              data-bwignore="true"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(
                  event.target.value,
                )
              }
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword,
                )
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <div className="password-rules">
            <span
              className={
                hasMinLength
                  ? 'success'
                  : 'error'
              }
            >
              • Mínimo de 8 caracteres
            </span>

            <span
              className={
                hasUppercase
                  ? 'success'
                  : 'error'
              }
            >
              • Pelo menos 1 letra maiúscula
            </span>

            <span
              className={
                hasNumber
                  ? 'success'
                  : 'error'
              }
            >
              • Pelo menos 1 número
            </span>

            <span
              className={
                passwordsMatch
                  ? 'success'
                  : 'error'
              }
            >
              • As senhas devem ser iguais
            </span>
          </div>

          {error && (
            <span className="reset-password-error">
              {error}
            </span>
          )}

          {successMessage && (
            <span className="reset-password-success">
              {successMessage}
            </span>
          )}

          <button
            type="submit"
            className="reset-password-button"
          >
            REDEFINIR SENHA
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}