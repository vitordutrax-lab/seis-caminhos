import {
  useState,
  type FormEvent,
} from 'react'

import { Link } from 'react-router-dom'

import { FaEnvelope } from 'react-icons/fa'

import { AuthLayout } from '../../layouts/AuthLayout'

import { supabase } from '../../services/supabase'

import './RecoverPassword.css'

export function RecoverPassword() {
  const [email, setEmail] =
    useState('')

  const [error, setError] =
    useState('')

  const [
    showSuccessModal,
    setShowSuccessModal,
  ] = useState(false)

  async function handleRecoverPassword(
    event: FormEvent,
  ) {
    event.preventDefault()

    setError('')

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo:
            'http://localhost:5173/redefinir-senha',
        },
      )

    if (error) {
      setError(
        'Erro ao enviar instruções',
      )

      return
    }

    setShowSuccessModal(true)

    setTimeout(() => {
      window.location.href =
        '/conectar'
    }, 3000)
  }

  return (
    <>
      <AuthLayout>
        <div className="login-container">
          <h1 className="login-title">
            Seis Caminhos
          </h1>

          <p className="recover-description">
            Digite seu e-mail para
            receber instruções de
            recuperação.
          </p>

          <form
            className="login-form"
            onSubmit={
              handleRecoverPassword
            }
          >
            <div className="login-input-wrapper">
              <FaEnvelope className="login-input-icon" />

              <input
                className="login-input"
                type="email"
                placeholder="E-mail"
                autoComplete="off"
                spellCheck={false}
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value,
                  )
                }
              />
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
              ENVIAR INSTRUÇÕES
            </button>

            <div className="recover-back">
              <Link to="/conectar">
                Voltar para conectar
              </Link>
            </div>
          </form>
        </div>
      </AuthLayout>

      {showSuccessModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h3>
              Instruções enviadas!
            </h3>

            <p>
              Vá até seu e-mail e
              siga as instruções para
              redefinir sua senha.
            </p>
          </div>
        </div>
      )}
    </>
  )
}