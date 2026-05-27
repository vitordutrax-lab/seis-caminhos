import { useNavigate } from 'react-router-dom'

import { signOut } from '../../services/authService'

import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const { user } = useAuth()

  const navigate = useNavigate()

  async function handleLogout() {
    await signOut()

    navigate('/conectar')
  }

  return (
    <header
      style={{
        height: '70px',
        borderBottom: '1px solid #2a2a2a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      <h2>Seis Caminhos</h2>

      {user && (
        <button onClick={handleLogout}>
          Sair
        </button>
      )}
    </header>
  )
}