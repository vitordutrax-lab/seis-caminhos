import { Link } from 'react-router-dom'

import { AuthLayout } from '../../layouts/AuthLayout'

import './AccountCreated.css'

export function AccountCreated() {
  return (
    <AuthLayout customClass="account-created-layout">
      <div className="account-created-container">
        <h1 className="account-created-title">
          SEIS
          <br />
          CAMINHOS
        </h1>

        <div className="account-created-divider" />

        <h2 className="account-created-success">
          CONTA CRIADA
        </h2>

        <p className="account-created-text">
          Sua jornada pelos
          Seis Caminhos
          está prestes a começar.
        </p>

        <Link
          to="/conectar"
          className="account-created-button"
        >
          CONECTAR
        </Link>
      </div>
    </AuthLayout>
  )
}