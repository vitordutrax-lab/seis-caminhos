import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

import { createClient } from '@supabase/supabase-js'

type RoomPlayer = {
  id: string
  user_id: string
  room_id: string
  is_host: boolean
  last_seen: string
}

type Room = {
  id: string
}

serve(async () => {
  const supabase =
    createClient(
      Deno.env.get(
        'SUPABASE_URL',
      )!,
      Deno.env.get(
        'SUPABASE_SERVICE_ROLE_KEY',
      )!,
    )

  const timeout =
    new Date(
      Date.now() -
        8000,
    ).toISOString()

  const {
    data:
      disconnectedPlayers,
  } = await supabase
    .from(
      'room_players',
    )
    .select('*')
    .lt(
      'last_seen',
      timeout,
    )

  if (
    disconnectedPlayers &&
    disconnectedPlayers.length >
      0
  ) {
    for (const player of disconnectedPlayers as RoomPlayer[]) {
      await supabase
        .from('profiles')
        .update({
          current_room_id:
            null,
        })
        .eq(
          'id',
          player.user_id,
        )

      await supabase
        .from(
          'room_players',
        )
        .delete()
        .eq(
          'id',
          player.id,
        )
    }
  }

  const {
    data: rooms,
  } = await supabase
    .from('rooms')
    .select('*')

  for (const room of rooms as Room[]) {
    const {
      data:
        remainingPlayers,
    } = await supabase
      .from(
        'room_players',
      )
      .select('*')
      .eq(
        'room_id',
        room.id,
      )

    if (
      !remainingPlayers ||
      remainingPlayers.length ===
        0
    ) {
      await supabase
        .from(
          'room_messages',
        )
        .delete()
        .eq(
          'room_id',
          room.id,
        )

      await supabase
        .from('rooms')
        .delete()
        .eq(
          'id',
          room.id,
        )

      continue
    }

    const hostStillExists =
      remainingPlayers.some(
        (
          player: RoomPlayer,
        ) =>
          player.is_host,
      )

    if (
      !hostStillExists
    ) {
      const newHost =
        remainingPlayers[0]

      await supabase
        .from(
          'room_players',
        )
        .update({
          is_host: true,
        })
        .eq(
          'id',
          newHost.id,
        )
    }
  }

  return new Response(
    JSON.stringify({
      success: true,
    }),
    {
      headers: {
        'Content-Type':
          'application/json',
      },
    },
  )
})