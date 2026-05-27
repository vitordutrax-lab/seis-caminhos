import {
  useState,
} from 'react'

import {
  FaDoorOpen,
  FaHome,
  FaPlus,
  FaScroll,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'

import { signOut } from '../../services/authService'

import './Home.css'

export function Home() {
  const navigate = useNavigate()

  const [
    showLogoutModal,
    setShowLogoutModal,
  ] = useState(false)

  async function handleLogout() {
    await signOut()

    navigate('/conectar')
  }

  return (
    <div className="home">
      <aside className="sidebar">
        <div className="sidebar-top">
          <h1>
            SEIS
            <br />
            CAMINHOS
          </h1>

          <div className="sidebar-avatar">
            <img
              src="/avatars/avatar1.png"
              alt=""
            />

            <span>Dutrax</span>
          </div>
        </div>

        <nav className="sidebar-menu">
          <button className="active">
            <FaHome />

            Início
          </button>

          <button>
            <FaUser />

            Perfil
          </button>

          <button>
            <FaPlus />

            Criar Sala
          </button>

          <button>
            <FaDoorOpen />

            Entrar em Sala
          </button>

          <button>
            <FaScroll />

            Cartas
          </button>

          <div className="sidebar-bottom">
            <div className="sidebar-divider" />

            <button
              className="logout-button"
              onClick={() =>
                setShowLogoutModal(
                  true,
                )
              }
            >
              <FaSignOutAlt />

              Sair
            </button>
          </div>
        </nav>
      </aside>

      <main className="home-content">
        <div className="home-panel">
          <h2>INÍCIO</h2>

          <div className="home-line" />

          <p>
            Bem-vindo ao Seis
            Caminhos.
          </p>
        </div>
      </main>

      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <h3>
              Deseja sair do jogo?
            </h3>

            <div className="modal-buttons">
              <button
                className="confirm-button"
                onClick={handleLogout}
              >
                SIM
              </button>

              <button
                className="cancel-button"
                onClick={() =>
                  setShowLogoutModal(
                    false,
                  )
                }
              >
                NÃO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}