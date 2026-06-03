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
  const navigate =
    useNavigate()

  const [
    showLogoutModal,
    setShowLogoutModal,
  ] = useState(false)

  const [
    multipleTabsDetected,
    setMultipleTabsDetected,
  ] = useState(false)

  const [
    currentSessionId,
  ] = useState(() =>
    crypto.randomUUID(),
  )

  const [
    sessionValidated,
    setSessionValidated,
  ] = useState(false)

  const [
    nickname,
    setNickname,
  ] = useState('')

  const [avatar, setAvatar] =
    useState(
      '/avatars/avatar.png',
    )

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } =
        await supabase.auth.getUser()

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
        setNickname(
          data.nickname,
        )

        if (data.avatar) {
          setAvatar(
            data.avatar,
          )
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
    const channel =
      new BroadcastChannel(
        'seis-caminhos-tabs',
      )

    const tabId =
      crypto.randomUUID()

    channel.postMessage({
      type: 'NEW_TAB',
      tabId,
    })

    channel.onmessage =
      (
        event,
      ) => {
        const data =
          event.data

        if (
          data.tabId ===
          tabId
        )
          return

        if (
          data.type ===
          'NEW_TAB'
        ) {
          queueMicrotask(() => {
            setMultipleTabsDetected(
              true,
            )
          })
        }
      }

    return () => {
      channel.close()
    }
  }, [])

  useEffect(() => {
let interval:
  | ReturnType<
      typeof setInterval
    >
  | undefined

    async function initializeRealtimeSession() {
      const {
        data: { user },
      } =
        await supabase.auth.getUser()

      if (!user) return

      await supabase
        .from('profiles')
        .update({
          active_session_id:
            currentSessionId,
        })
        .eq('id', user.id)

      setSessionValidated(
        true,
      )

      const channel =
        supabase.channel(
          `session-${user.id}`,
        )

      channel.on(
        'postgres_changes',
        {
          event: 'UPDATE',

          schema: 'public',

          table: 'profiles',

          filter: `id=eq.${user.id}`,
        },
        (
          payload,
        ) => {
          const newSessionId =
            payload.new
              .active_session_id

          if (
            newSessionId !==
            currentSessionId
          ) {
            queueMicrotask(() => {
              setMultipleTabsDetected(
                true,
              )
            })
          }
        },
      )

      channel.subscribe()

      interval =
        setInterval(
          async () => {
            const {
              data: profile,
            } = await supabase
              .from('profiles')
              .select(
                'active_session_id',
              )
              .eq(
                'id',
                user.id,
              )
              .single()

            if (
              profile?.active_session_id !==
              currentSessionId
            ) {
              setMultipleTabsDetected(
                true,
              )
            }
          },
          2000,
        )

      return () => {
        supabase.removeChannel(
          channel,
        )
      }
    }

    void initializeRealtimeSession()

    return () => {
      if (interval) {
        clearInterval(
          interval,
        )
      }
    }
  }, [currentSessionId])

  async function handleLogout() {
    const {
      data: { user },
    } =
      await supabase.auth.getUser()

    if (user) {
      await supabase
        .from('profiles')
        .update({
          active_session_id:
            null,
        })
        .eq('id', user.id)
    }

    await supabase.auth.signOut()

    navigate('/conectar')
  }

  if (
    multipleTabsDetected
  ) {
    return (
      <div className="dashboard-tabs-overlay">
        <div className="dashboard-tabs-modal">
          <h2>
            Outra sessão detectada
          </h2>

          <p>
            Esta conta foi aberta em outra aba ou navegador.
          </p>
        </div>
      </div>
    )
  }

  if (!sessionValidated) {
    return null
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

              <span>
                {nickname}
              </span>
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
          <h2 className="home-panel-title">
  {title}
</h2>

          {children}
        </div>
      </main>

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