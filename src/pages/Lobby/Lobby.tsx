import { MainLayout } from '../../layouts/MainLayout'

import { useAuth } from '../../hooks/useAuth'

import { createRoom } from '../../services/roomService'

export function Lobby() {
  const { user } = useAuth()

  async function handleCreateRoom() {
    if (!user) return

    const { error } = await createRoom(
      'Nova Sala',
      user.id,
    )

    console.log(error)
  }

  return (
    <MainLayout>
      <div
        style={{
          padding: '24px',
        }}
      >
        <h1>Lobby</h1>

        <p>
          Bem-vindo,
          {' '}
          {user?.email}
        </p>

        <button onClick={handleCreateRoom}>
          Criar Sala
        </button>
      </div>
    </MainLayout>
  )
}