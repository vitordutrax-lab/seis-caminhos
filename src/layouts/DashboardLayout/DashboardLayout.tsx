import {
  useEffect,
  useState,
} from 'react'

import type { ReactNode } from 'react'

import {
  FaDoorOpen,
  FaHome,
  FaPlus,
  FaScroll,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from 'react-icons/fa'

import {
  NavLink,
  useNavigate,
} from 'react-router-dom'

import { supabase } from '../../services/supabase'

import './DashboardLayout.css'

interface DashboardLayoutProps {
  title: string

  children: ReactNode

  hideSidebar?: boolean
}

export function DashboardLayout({
  title,
  children,
  hideSidebar = false,
}: DashboardLayoutProps) {
  const navigate = useNavigate()

  const [showLogoutModal, setShowLogoutModal] =
    useState(false)

  const [
    multipleTabsDetected,
    setMultipleTabsDetected,
  ] = useState(false)

  const [nickname, setNickname] =
    useState('')

  const [avatar, setAvatar] =
    useState('/avatars/avatar.png')

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) return

      const { data } =
        await supabase
          .from('profiles')
          .select(
            'nickname, avatar',
          )
          .eq('id', user.id)
          .single()

      if (data) {
        setNickname(data.nickname)

        if (data.avatar) {
          setAvatar(data.avatar)
        }
      }
    }

    void loadProfile()
  }, [])

  useEffect(() => {
    function handleAvatarUpdate(
      event: Event,
    ) {
      const customEvent =
        event as CustomEvent

      setAvatar(
        customEvent.detail,
      )
    }

    window.addEventListener(
      'avatarUpdated',
      handleAvatarUpdate,
    )

    return () => {
      window.removeEventListener(
        'avatarUpdated',
        handleAvatarUpdate,
      )
    }
  }, [])

  useEffect(() => {
    function handleNicknameUpdate(
      event: Event,
    ) {
      const customEvent =
        event as CustomEvent

      setNickname(
        customEvent.detail,
      )
    }

    window.addEventListener(
      'nicknameUpdated',
      handleNicknameUpdate,
    )

    return () => {
      window.removeEventListener(
        'nicknameUpdated',
        handleNicknameUpdate,
      )
    }
  }, [])

  useEffect(() => {
    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        (
          event,
          session,
        ) => {
          if (
            event ===
              'SIGNED_OUT' ||
            !session
          ) {
            localStorage.removeItem(
              'seis-caminhos-active-tab',
            )
          }
        },
      )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

useEffect(() => {
  const token =
    localStorage.getItem(
      'supabase.auth.token',
    )

  if (!token) return

  const lockKey =
    'seis-caminhos-active-tab'

  const tabId =
    crypto.randomUUID()

  const existingLock =
    localStorage.getItem(
      lockKey,
    )

  if (existingLock) {
    const parsed =
      JSON.parse(
        existingLock,
      )

    const now = Date.now()

    const isAlive =
      now -
        parsed.timestamp <
      3000

    if (isAlive) {
      setTimeout(() => {
        setMultipleTabsDetected(
          true,
        )
      }, 0)

      return
    }
  }

  localStorage.setItem(
    lockKey,
    JSON.stringify({
      tabId,
      timestamp:
        Date.now(),
    }),
  )

  const heartbeat =
    setInterval(() => {
      localStorage.setItem(
        lockKey,
        JSON.stringify({
          tabId,
          timestamp:
            Date.now(),
        }),
      )
    }, 1000)

  const handleStorage =
    (
      event: StorageEvent,
    ) => {
      if (
        event.key !==
        lockKey
      )
        return

      if (!event.newValue)
        return

      const parsed =
        JSON.parse(
          event.newValue,
        )

      if (
        parsed.tabId !==
        tabId
      ) {
        queueMicrotask(() => {
          setMultipleTabsDetected(
            true,
          )
        })
      }
    }

  window.addEventListener(
    'storage',
    handleStorage,
  )

  return () => {
    clearInterval(
      heartbeat,
    )

    const currentLock =
      localStorage.getItem(
        lockKey,
      )

    if (currentLock) {
      const parsed =
        JSON.parse(
          currentLock,
        )

      if (
        parsed.tabId ===
        tabId
      ) {
        localStorage.removeItem(
          lockKey,
        )
      }
    }

    window.removeEventListener(
      'storage',
      handleStorage,
    )
  }
}, [])

  async function handleLogout() {
    localStorage.removeItem(
      'seis-caminhos-active-tab',
    )

    await supabase.auth.signOut()

    navigate('/conectar')
  }

  return (
    <div className="home-container">
      {!hideSidebar && (
        <aside className="sidebar">
          <div className="sidebar-top">
            <h1 className="sidebar-logo">
              SEIS
              <br />
              CAMINHOS
            </h1>

            <div className="sidebar-avatar">
              <img
                src={avatar}
                alt="Avatar"
              />

              <span>{nickname}</span>
            </div>

            <nav className="sidebar-menu">
              <NavLink to="/inicio">
                <FaHome />
                Início
              </NavLink>

              <NavLink to="/perfil">
                <FaUser />
                Perfil
              </NavLink>

              <NavLink to="/criar-sala">
                <FaPlus />
                Criar Sala
              </NavLink>

              <NavLink to="/entrar-sala">
                <FaUsers />
                Entrar em Sala
              </NavLink>

              <NavLink to="/cartas">
                <FaScroll />
                Cartas
              </NavLink>
            </nav>
          </div>

          <div className="sidebar-bottom">
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
        </aside>
      )}

      <main
        className={`home-content ${
          hideSidebar
            ? 'full'
            : ''
        }`}
      >
        <div className="home-panel">
          <h2>{title}</h2>

          {children}
        </div>
      </main>

      {multipleTabsDetected && (
        <div className="dashboard-tabs-overlay">
          <div className="dashboard-tabs-modal">
            <h2>
              Outra aba detectada
            </h2>

            <p>
              Você já possui outra aba aberta.
            </p>

            <span>
              Feche esta janela para continuar.
            </span>
          </div>
        </div>
      )}

      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <FaDoorOpen className="logout-icon" />

            <h3>
              Deseja sair?
            </h3>

            <p>
              Você será desconectado da sua conta.
            </p>

            <div className="logout-actions">
              <button
                className="confirm"
                onClick={
                  handleLogout
                }
              >
                Sim
              </button>

              <button
                className="cancel"
                onClick={() =>
                  setShowLogoutModal(
                    false,
                  )
                }
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}