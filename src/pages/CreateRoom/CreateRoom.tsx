import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout'

import { supabase } from '../../services/supabase'

import { generateRoomCode } from '../../utils/generateRoomCode'

import './CreateRoom.css'

export function CreateRoom() {
  const navigate = useNavigate()

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  async function handleCreateRoom() {
    try {
      setLoading(true)

      setError('')

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
  setError(
    'Usuário não autenticado',
  )

  return
}

const {
  data: profile,
} = await supabase
  .from('profiles')
  .select('nickname')
  .eq('id', user.id)
  .single()

      const roomCode =
        generateRoomCode()

      const { data: roomData, error: roomError } =
        await supabase
          .from('rooms')
          .insert({
            code: roomCode,

            leader_id: user.id,
          })
          .select()
          .single()

      if (
        roomError ||
        !roomData
      ) {
        setError(
          'Erro ao criar sala',
        )

        return
      }

      const {
  error: playerError,
} = await supabase
  .from('room_players')
.insert({
  room_id: roomData.id,

  user_id: user.id,

  is_host: true,

  last_seen:
    new Date().toISOString(),
})
if (playerError) {
  setError(
    'Erro ao entrar na sala',
  )

  return
}

await supabase
  .from('room_messages')
  .insert({
    room_id: roomData.id,

    user_id: user.id,

    is_system: true,

    message: `${
  profile?.nickname
    ?? 'Jogador'
} criou a sala.`,
  })

      navigate(
        `/sala/${roomCode}`,
      )
    } catch {
      setError(
        'Erro inesperado ao criar sala',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLayout title="CRIAR SALA">
      <div className="create-room-container">
        <div className="create-room-box">
          <h3>
            Criar Nova Sala
          </h3>

          <p>
            Crie uma sala privada e
            convide seus amigos
            utilizando o código da
            partida.
          </p>

          {error && (
            <div className="create-room-error">
              {error}
            </div>
          )}

          <button
            className="create-room-button"
            onClick={
              handleCreateRoom
            }
            disabled={loading}
          >
            {loading
              ? 'CRIANDO SALA...'
              : 'CRIAR SALA'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}