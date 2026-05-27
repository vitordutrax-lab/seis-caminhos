import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Lobby } from '../pages/Lobby'
import { Room } from '../pages/Room'
import { Match } from '../pages/Match'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/conectar"
        element={<Login />}
      />

      <Route
        path="/registrar"
        element={<Register />}
      />

      <Route
        path="/lobby"
        element={<Lobby />}
      />

      <Route
        path="/sala/:id"
        element={<Room />}
      />

      <Route
        path="/partida/:id"
        element={<Match />}
      />
    </Routes>
  )
}