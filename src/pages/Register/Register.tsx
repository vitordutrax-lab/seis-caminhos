import {
  useEffect,
  useState,
  type FormEvent,
} from 'react'

import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
} from 'react-icons/fa'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

import { AuthLayout } from '../../layouts/AuthLayout'

import { register } from '../../services/registerService'
import { supabase } from '../../services/supabase'

import './Register.css'

export function Register() {
  const navigate = useNavigate()

  const [nickname, setNickname] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

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
    nicknameAvailable,
    setNicknameAvailable,
  ] = useState<boolean | null>(
    null,
  )

  const [
    emailAvailable,
    setEmailAvailable,
  ] = useState<boolean | null>(
    null,
  )

  const isLengthValid =
    password.length >= 8

  const hasUppercase =
    /[A-Z]/.test(password)

  const hasNumber =
    /\d/.test(password)

  const isPasswordValid =
    isLengthValid &&
    hasUppercase &&
    hasNumber

  const isPasswordsEqual =
    password === confirmPassword &&
    confirmPassword.length > 0

  useEffect(() => {
    async function checkNickname() {
      if (nickname.length < 3) {
        setNicknameAvailable(null)

        return
      }

      const { data } =
        await supabase
          .from('profiles')
          .select('id')
          .eq(
            'nickname_lower',
            nickname.toLowerCase(),
          )
          .maybeSingle()

      setNicknameAvailable(!data)
    }

    checkNickname()
  }, [nickname])

  useEffect(() => {
    async function checkEmail() {
      if (email.length < 5) {
        setEmailAvailable(null)

        return
      }

      const { data } =
        await supabase
          .from('profiles')
          .select('id')
          .eq(
            'email_lower',
            email.toLowerCase(),
          )
          .maybeSingle()

      setEmailAvailable(!data)
    }

    checkEmail()
  }, [email])

  async function handleRegister(
    event: FormEvent,
  ) {
    event.preventDefault()

    if (!isPasswordValid) {
      return
    }

    if (!isPasswordsEqual) {
      return
    }

    const response =
      await register({
        nickname,
        email,
        password,
      })

    if (response.error) {
      alert(response.error)

      return
    }

    navigate('/conta-criada')
  }

  return (
    <AuthLayout>
      <div className="register-container">
        <h1 className="register-title">
          SEIS
          <br />
          CAMINHOS
        </h1>

        <div className="auth-tabs">
          <Link
            to="/conectar"
            className="auth-tab"
          >
            CONECTAR
          </Link>

          <Link
            to="/registrar"
            className="auth-tab active"
          >
            CADASTRAR
          </Link>
        </div>

        <form
          className="register-form"
          onSubmit={handleRegister}
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

          <div className="register-input-wrapper">
            <FaUser className="register-input-icon" />

            <input
              type="text"
              name="hidden-field-nickname"
              placeholder="Nick de Aventureiro"
              className="sc-input"
              autoComplete="off"
              spellCheck={false}
              maxLength={16}
              value={nickname}
              onChange={(e) =>
                setNickname(
                  e.target.value,
                )
              }
            />
          </div>

          {nicknameAvailable !==
            null && (
            <span
              className={`validation-text ${
                nicknameAvailable
                  ? 'success'
                  : 'error'
              }`}
            >
              {nicknameAvailable
                ? 'Nickname disponível'
                : 'Nickname já cadastrado'}
            </span>
          )}

          <div className="register-input-wrapper">
            <FaEnvelope className="register-input-icon" />

            <input
              type="text"
              name="hidden-field-email"
              placeholder="E-mail"
              className="sc-input"
              autoComplete="off"
              spellCheck={false}
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value,
                )
              }
            />
          </div>

          {emailAvailable !==
            null && (
            <span
              className={`validation-text ${
                emailAvailable
                  ? 'success'
                  : 'error'
              }`}
            >
              {emailAvailable
                ? 'E-mail não cadastrado'
                : 'E-mail já cadastrado'}
            </span>
          )}

          <div className="register-input-wrapper">
            <FaLock className="register-input-icon" />

            <input
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              name="hidden-field-password"
              placeholder="Senha"
              className="sc-input"
              autoComplete="new-password"
              spellCheck={false}
              data-lpignore="true"
              data-1p-ignore="true"
              data-bwignore="true"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value,
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

          <div className="register-input-wrapper">
            <FaLock className="register-input-icon" />

            <input
              type={
                showConfirmPassword
                  ? 'text'
                  : 'password'
              }
              name="hidden-field-confirm-password"
              placeholder="Confirmar senha"
              className="sc-input"
              autoComplete="new-password"
              spellCheck={false}
              data-lpignore="true"
              data-1p-ignore="true"
              data-bwignore="true"
              value={
                confirmPassword
              }
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value,
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
                isLengthValid
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
                isPasswordsEqual
                  ? 'success'
                  : 'error'
              }
            >
              • As senhas devem ser iguais
            </span>
          </div>

          <button
            type="submit"
            className="register-button"
          >
            CRIAR CONTA
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}