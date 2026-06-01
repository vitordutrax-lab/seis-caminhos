import {
  useState,
} from 'react'

import {
  useNavigate,
} from 'react-router-dom'

import {
  DashboardLayout,
} from '../../layouts/DashboardLayout/DashboardLayout'

import {
  supabase,
} from '../../services/supabase'

import './EnterRoom.css'

export function EnterRoom() {
  const navigate =
    useNavigate()

  const [code, setCode] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  async function handleEnterRoom() {
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

      const upperCode =
        code.toUpperCase()

      const {
        data: room,
      } = await supabase
        .from('rooms')
        .select('*')
        .eq(
          'code',
          upperCode,
        )
        .single()

      if (!room) {
        setError(
          'Sala não encontrada',
        )

        return
      }

      if (room.in_game) {
        setError(
          'A partida já foi iniciada',
        )

        return
      }

      const {
        data: currentRoom,
      } = await supabase
        .from('profiles')
        .select(
          'current_room_id',
        )
        .eq('id', user.id)
        .single()

      if (
        currentRoom?.current_room_id
      ) {
        setError(
          'Você já está em uma partida',
        )

        return
      }

      const {
        data: players,
      } = await supabase
        .from('room_players')
        .select('id')
        .eq(
          'room_id',
          room.id,
        )

      if (
        players &&
        players.length >=
          room.max_players
      ) {
        setError(
          'A sala está com o máximo de jogadores',
        )

        return
      }

      const {
        error: playerError,
      } = await supabase
        .from('room_players')
        .insert({
          room_id: room.id,

          user_id: user.id,
        })

      if (playerError) {
        setError(
          'Erro ao entrar na sala',
        )

        return
      }

      await supabase
        .from('profiles')
        .update({
          current_room_id:
            room.id,
        })
        .eq('id', user.id)

      navigate(
        `/sala/${upperCode}`,
      )
    } catch {
      setError(
        'Erro inesperado',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLayout title="ENTRAR EM SALA">
      <div className="enter-room-container">
        <div className="enter-room-box">
          <h3>
            Entrar em Sala
          </h3>

          <p>
            Digite o código da
            partida para entrar no
            lobby.
          </p>

          <input
            className="enter-room-input"
            type="text"
            placeholder="CÓDIGO"
            maxLength={6}
            value={code}
            onChange={(event) =>
              setCode(
                event.target.value.toUpperCase(),
              )
            }
          />

          {error && (
            <div className="enter-room-error">
              {error}
            </div>
          )}

          <button
            className="enter-room-button"
            onClick={
              handleEnterRoom
            }
            disabled={loading}
          >
            {loading
              ? 'ENTRANDO...'
              : 'ENTRAR'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}