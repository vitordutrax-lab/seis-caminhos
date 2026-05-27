import { supabase } from './supabase'

export async function createRoom(
  name: string,
  hostId: string,
) {
  return await supabase
    .from('rooms')
    .insert({
      name,
      host_id: hostId,
      min_players: 3,
      max_players: 8,
      current_players: 1,
      in_game: false,
    })
}