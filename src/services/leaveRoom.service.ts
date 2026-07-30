import { supabase } from './supabase'

export async function leaveRoom(
  roomId: string,
  userId: string,
) {
  // =========================
  // BUSCA A SALA
  // =========================

  const {
    data: room,
    error: roomError,
  } = await supabase
    .from('rooms')
    .select('leader_id')
    .eq('id', roomId)
    .single()

  if (
    roomError ||
    !room
  ) {
    console.error(
      'Erro ao buscar sala.',
      roomError,
    )

    return false
  }

  // =========================
  // BUSCA JOGADORES
  // =========================

const {
  data: players,
  error: playersError,
} = await supabase
  .from('game_players')
  .select(
    'user_id, position',
  )
  .eq(
    'room_id',
    roomId,
  )
  .order(
    'position',
    {
      ascending: true,
    },
  )

  if (
    playersError ||
    !players
  ) {
    console.error(
      'Erro ao buscar jogadores.',
      playersError,
    )

    return false
  }

  // =========================
  // TRANSFERE A LIDERANÇA
  // =========================

  const isLeader =
    room.leader_id ===
    userId

  if (isLeader) {
    const remainingPlayers =
      players.filter(
        player =>
          player.user_id !==
          userId,
      )

    if (
      remainingPlayers.length > 0
    ) {
      const newLeader =
        remainingPlayers[0]

      const {
        error:
          updateLeaderError,
      } = await supabase
        .from('rooms')
        .update({
          leader_id:
            newLeader.user_id,
        })
        .eq(
          'id',
          roomId,
        )

      if (
        updateLeaderError
      ) {
        console.error(
          'Erro ao transferir liderança.',
          updateLeaderError,
        )

        return false
      }
    }
  }

  // =========================
  // REMOVE ROOM_PLAYER
  // =========================

  const {
    error: roomPlayerError,
  } = await supabase
    .from('room_players')
    .delete()
    .eq(
      'room_id',
      roomId,
    )
    .eq(
      'user_id',
      userId,
    )

  if (
    roomPlayerError
  ) {
    console.error(
      'Erro ao remover room_player.',
      roomPlayerError,
    )

    return false
  }

  // =========================
  // REMOVE GAME_PLAYER
  // =========================

  const {
    error: gamePlayerError,
  } = await supabase
    .from('game_players')
    .delete()
    .eq(
      'room_id',
      roomId,
    )
    .eq(
      'user_id',
      userId,
    )

  if (
    gamePlayerError
  ) {
    console.error(
      'Erro ao remover game_player.',
      gamePlayerError,
    )

    return false
  }

  // =========================
  // LIMPA PROFILE
  // =========================

  const {
    error: profileError,
  } = await supabase
    .from('profiles')
    .update({
      current_room_id:
        null,
    })
    .eq(
      'id',
      userId,
    )

  if (
    profileError
  ) {
    console.error(
      'Erro ao atualizar profile.',
      profileError,
    )

    return false
  }

  // =========================
  // VERIFICA SE A SALA FICOU VAZIA
  // =========================

  const {
    data:
      remainingRoomPlayers,
    error:
      remainingPlayersError,
  } = await supabase
    .from('room_players')
    .select('user_id')
    .eq(
      'room_id',
      roomId,
    )

  if (
    remainingPlayersError
  ) {
    console.error(
      'Erro ao verificar jogadores restantes.',
      remainingPlayersError,
    )

    return false
  }

  // =========================
  // REMOVE A SALA SE ESTIVER VAZIA
  // =========================

  if (
    remainingRoomPlayers.length ===
    0
  ) {
    const {
      error:
        gameStateError,
    } = await supabase
      .from('game_state')
      .delete()
      .eq(
        'room_id',
        roomId,
      )

    if (
      gameStateError
    ) {
      console.error(
        'Erro ao remover game_state.',
        gameStateError,
      )

      return false
    }

    const {
      error:
        roomDeleteError,
    } = await supabase
      .from('rooms')
      .delete()
      .eq(
        'id',
        roomId,
      )

    if (
      roomDeleteError
    ) {
      console.error(
        'Erro ao remover sala.',
        roomDeleteError,
      )

      return false
    }
  }

  return true
}