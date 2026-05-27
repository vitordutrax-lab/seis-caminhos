import {
  useState,
  type FormEvent,
} from 'react'

import './Login.css'

export function Login() {
  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

function handleLogin(
  event: FormEvent,
) {
  event.preventDefault()

  console.log(email)
  console.log(password)
}    

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  )
}