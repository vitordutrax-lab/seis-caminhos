import {
  useEffect,
  useState,
} from 'react'

import {
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa'

import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout'

import { supabase } from '../../services/supabase'

import toast from 'react-hot-toast'

import './Profile.css'

export function Profile() {
  const [avatar, setAvatar] =
    useState('/avatars/avatar.png')

  const [email, setEmail] =
    useState('')

  const [, setNickname] =
    useState('')

  const [
    originalNickname,
    setOriginalNickname,
  ] = useState('')

  const [
    nicknameInput,
    setNicknameInput,
  ] = useState('')

  const [
    nicknameMessage,
    setNicknameMessage,
  ] = useState('')

  const [
    nicknameAvailable,
    setNicknameAvailable,
  ] = useState(false)

  const [
    nicknameSuccess,
    setNicknameSuccess,
  ] = useState(false)

  const [
    showNicknameModal,
    setShowNicknameModal,
  ] = useState(false)

  const [
    showPasswordModal,
    setShowPasswordModal,
  ] = useState(false)

  const [
    passwordError,
    setPasswordError,
  ] = useState('')

  const [
    currentPassword,
    setCurrentPassword,
  ] = useState('')

  const [
    newPassword,
    setNewPassword,
  ] = useState('')

  const [
    confirmNewPassword,
    setConfirmNewPassword,
  ] = useState('')

  const [
    showCurrentPassword,
    setShowCurrentPassword,
  ] = useState(false)

  const [
    showNewPassword,
    setShowNewPassword,
  ] = useState(false)

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false)

  const hasMinLength =
    newPassword.length >= 8

  const hasUppercase =
    /[A-Z]/.test(newPassword)

  const hasNumber =
    /[0-9]/.test(newPassword)

  const passwordsMatch =
    newPassword ===
      confirmNewPassword &&
    confirmNewPassword.length > 0

  const isDifferentPassword =
    newPassword !== currentPassword &&
    newPassword.length > 0

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
            'email, nickname, avatar',
          )
          .eq('id', user.id)
          .single()

      if (data) {
        setEmail(data.email)

        setNickname(data.nickname)

        setOriginalNickname(
          data.nickname,
        )

        setAvatar(data.avatar)
      }
    }

    loadProfile()
  }, [])

  useEffect(() => {
    async function checkNickname() {
      if (nicknameSuccess) {
        setNicknameMessage(
          'Nickname alterado com sucesso',
        )

        return
      }

      if (
        nicknameInput.trim() === ''
      ) {
        setNicknameMessage('')

        return
      }

      if (
        nicknameInput.length < 3
      ) {
        setNicknameAvailable(
          false,
        )

        setNicknameMessage(
          'Nickname muito curto',
        )

        return
      }

      if (
        nicknameInput.length > 16
      ) {
        setNicknameAvailable(
          false,
        )

        setNicknameMessage(
          'Máximo de 16 caracteres',
        )

        return
      }

      if (
        nicknameInput ===
        originalNickname
      ) {
        setNicknameAvailable(
          false,
        )

        setNicknameMessage(
          'Esse já é seu nickname',
        )

        return
      }

      const { data } =
        await supabase
          .from('profiles')
          .select('id')
          .eq(
            'nickname_lower',
            nicknameInput.toLowerCase(),
          )
          .maybeSingle()

      if (data) {
        setNicknameAvailable(
          false,
        )

        setNicknameMessage(
          'Nickname já cadastrado',
        )
      } else {
        setNicknameAvailable(
          true,
        )

        setNicknameMessage(
          'Nickname disponível',
        )
      }
    }

    checkNickname()
  }, [
    nicknameInput,
    originalNickname,
    nicknameSuccess,
  ])

  async function handleAvatarChange(
    avatarPath: string,
  ) {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    await supabase
      .from('profiles')
      .update({
        avatar: avatarPath,
      })
      .eq('id', user.id)

    setAvatar(avatarPath)

    toast.success(
  'Avatar atualizado',
)

    window.dispatchEvent(
      new CustomEvent(
        'avatarUpdated',
        {
          detail: avatarPath,
        },
      ),
    )
  }

  async function handleNicknameUpdate() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    if (!nicknameAvailable) {
      return
    }

    const { error } =
  await supabase
    .from('profiles')
    .update({
      nickname:
        nicknameInput,

      nickname_lower:
        nicknameInput.toLowerCase(),
    })
    .eq('id', user.id)

if (error) {
  setNicknameAvailable(
    false,
  )

  setNicknameMessage(
    'Nickname já cadastrado',
  )

  return
}

    setNickname(
      nicknameInput,
    )

    setOriginalNickname(
      nicknameInput,
    )

    setNicknameMessage(
      'Nickname alterado com sucesso',
    )

    setNicknameAvailable(true)

    setNicknameSuccess(true)

    setShowNicknameModal(true)
    toast.success(
  'Nickname atualizado',
)

    window.dispatchEvent(
      new CustomEvent(
        'nicknameUpdated',
        {
          detail: nicknameInput,
        },
      ),
    )

    setTimeout(() => {
      setShowNicknameModal(
        false,
      )

      setNicknameSuccess(false)

      setNicknameInput('')

      setNicknameMessage('')
    }, 3000)
  }

  async function handlePasswordUpdate() {
    setPasswordError('')

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user?.email) return

    const { error: loginError } =
      await supabase.auth.signInWithPassword(
        {
          email: user.email,
          password: currentPassword,
        },
      )

    if (loginError) {
      setPasswordError(
        'Senha atual incorreta',
      )

      return
    }

    if (
      newPassword !==
      confirmNewPassword
    ) {
      setPasswordError(
        'As senhas não coincidem',
      )

      return
    }

    if (
      newPassword === currentPassword
    ) {
      setPasswordError(
        'A nova senha deve ser diferente',
      )

      return
    }

    const { error } =
      await supabase.auth.updateUser({
        password: newPassword,
      })

    if (error) {
      setPasswordError(
        error.message,
      )

      return
    }

    setShowPasswordModal(true)
    toast.success(
  'Senha alterada',
)

    setTimeout(async () => {
      await supabase.auth.signOut()

      window.location.href =
        '/conectar'
    }, 3000)
  }

  return (
    <>
      <DashboardLayout title="PERFIL">
        <div className="profile-grid">
          <div className="profile-card avatar-card">
            <h3>AVATAR</h3>

            <div className="profile-avatar-content">
              <img
                className="profile-main-avatar"
                src={avatar}
                alt=""
              />

              <div className="profile-avatar-list">
                <img
                  src="/avatars/anao.png"
                  alt=""
                  onClick={() =>
                    handleAvatarChange(
                      '/avatars/anao.png',
                    )
                  }
                />

                <img
                  src="/avatars/elfo.png"
                  alt=""
                  onClick={() =>
                    handleAvatarChange(
                      '/avatars/elfo.png',
                    )
                  }
                />

                <img
                  src="/avatars/gigante.png"
                  alt=""
                  onClick={() =>
                    handleAvatarChange(
                      '/avatars/gigante.png',
                    )
                  }
                />

                <img
                  src="/avatars/humano.png"
                  alt=""
                  onClick={() =>
                    handleAvatarChange(
                      '/avatars/humano.png',
                    )
                  }
                />

                <img
                  src="/avatars/meiodemonio.png"
                  alt=""
                  onClick={() =>
                    handleAvatarChange(
                      '/avatars/meiodemonio.png',
                    )
                  }
                />

                <img
                  src="/avatars/semideus.png"
                  alt=""
                  onClick={() =>
                    handleAvatarChange(
                      '/avatars/semideus.png',
                    )
                  }
                />
              </div>
            </div>
          </div>

          <div className="profile-card email-card">
            <h3>E-MAIL</h3>

            <input
              type="text"
              value={email}
              disabled
            />
          </div>

          <div className="profile-card nickname-card">
            <h3>NICKNAME</h3>

            <div className="profile-input-group">
              <input
                type="text"
                value={nicknameInput}
                placeholder="Novo nickname"
                autoComplete="off"
                spellCheck={false}
                name="hidden-profile-nickname"
                maxLength={16}
                onChange={(event) =>
                  setNicknameInput(
                    event.target.value,
                  )
                }
              />

              <button
                onClick={
                  handleNicknameUpdate
                }
              >
                ALTERAR
              </button>
            </div>

            {!nicknameSuccess &&
              nicknameMessage && (
                <span
                  className={
                    nicknameAvailable
                      ? 'success'
                      : 'error'
                  }
                >
                  {nicknameMessage}
                </span>
              )}
          </div>

          <div className="profile-card password-card">
            <h3>
              ALTERAR SENHA
            </h3>

            <div className="profile-password-section">
              <span>
                Sua senha atual
              </span>

              <div className="profile-password-input">
                <input
                  type={
                    showCurrentPassword
                      ? 'text'
                      : 'password'
                  }
                  placeholder="Senha atual"
                  value={
                    currentPassword
                  }
                  autoComplete="off"
                  spellCheck={false}
                  onChange={(
                    event,
                  ) =>
                    setCurrentPassword(
                      event.target.value,
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrentPassword(
                      !showCurrentPassword,
                    )
                  }
                >
                  {showCurrentPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            </div>

            <div className="profile-password-grid">
              <div className="profile-password-section">
                <span>
                  Nova senha
                </span>

                <div className="profile-password-input">
                  <input
                    type={
                      showNewPassword
                        ? 'text'
                        : 'password'
                    }
                    placeholder="Nova senha"
                    value={newPassword}
                    autoComplete="new-password"
                    spellCheck={false}
                    onChange={(
                      event,
                    ) =>
                      setNewPassword(
                        event.target.value,
                      )
                    }
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowNewPassword(
                        !showNewPassword,
                      )
                    }
                  >
                    {showNewPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                </div>
              </div>

              <div className="profile-password-section">
                <span>
                  Confirmar nova senha
                </span>

                <div className="profile-password-input">
                  <input
                    type={
                      showConfirmPassword
                        ? 'text'
                        : 'password'
                    }
                    placeholder="Confirmar nova senha"
                    value={
                      confirmNewPassword
                    }
                    autoComplete="new-password"
                    spellCheck={false}
                    onChange={(
                      event,
                    ) =>
                      setConfirmNewPassword(
                        event.target.value,
                      )
                    }
                  />

                  <button
                    type="button"
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
              </div>
            </div>

            <div className="profile-password-rules">
              <span
                className={
                  hasMinLength
                    ? 'success'
                    : 'error'
                }
              >
                • Mínimo de 8
                caracteres
              </span>

              <span
                className={
                  hasUppercase
                    ? 'success'
                    : 'error'
                }
              >
                • Pelo menos 1 letra
                maiúscula
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
                • As senhas devem
                coincidir
              </span>

              <span
                className={
                  isDifferentPassword
                    ? 'success'
                    : 'error'
                }
              >
                • A nova senha deve
                ser diferente da
                atual
              </span>
            </div>

            <div className="profile-password-bottom">
  <button
    className="profile-password-button"
    onClick={
      handlePasswordUpdate
    }
  >
    ALTERAR
  </button>

  {passwordError && (
    <span className="profile-password-error">
      {passwordError}
    </span>
  )}
</div>
          </div>
        </div>
      </DashboardLayout>

      {showNicknameModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h3>
              Nickname alterado!
            </h3>
          </div>
        </div>
      )}

      {showPasswordModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h3>
              Senha alterada!
            </h3>

            <p>
              Sua senha foi alterada
              com sucesso.
              <br />
              Desconectando...
            </p>
          </div>
        </div>
      )}
    </>
  )
}