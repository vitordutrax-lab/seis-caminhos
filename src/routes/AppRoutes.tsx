import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Lobby } from '../pages/Lobby'
import { Room } from '../pages/Room'
import { Match } from '../pages/Match'
import { Navigate } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
          <Route
            path="/"
           element={
          <Navigate to="/conectar" />
              }
            />

      <Route
            path="/conectar"
            element={
            <PublicRoute>
            <Login />
          </PublicRoute>
          }
          />

      <Route
        path="/registrar"
        element={<Register />}
      />

      <Route
        path="/lobby"
        element={
      <PrivateRoute>
        <Lobby />
      </PrivateRoute>
         }
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