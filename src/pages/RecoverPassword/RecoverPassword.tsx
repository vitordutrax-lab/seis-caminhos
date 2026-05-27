import {
  useState,
  type FormEvent,
} from 'react'

import { Link } from 'react-router-dom'

import { FaEnvelope } from 'react-icons/fa'

import { AuthLayout } from '../../layouts/AuthLayout'

import './RecoverPassword.css'

export function RecoverPassword() {
  const [email, setEmail] =
    useState('')

  async function handleRecoverPassword(
    event: FormEvent,
  ) {
    event.preventDefault()

    console.log(email)
  }

  return (
    <AuthLayout>
      <div className="login-container">
        <h1 className="login-title">
          Seis Caminhos
        </h1>

        <p className="recover-description">
          Digite seu e-mail para receber
          instruções de recuperação.
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
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value,
                )
              }
            />
          </div>

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
  )
}