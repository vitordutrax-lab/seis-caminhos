import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { RecoverPassword } from '../pages/RecoverPassword'
import { Register } from '../pages/Register'
import { AccountCreated } from '../pages/AccountCreated'
import { ResetPassword } from '../pages/ResetPassword'

import { Profile } from '../pages/Profile/Profile'

import { CreateRoom } from '../pages/CreateRoom/CreateRoom'

import { EnterRoom } from '../pages/EnterRoom/EnterRoom'

import Cards from '../pages/Cards/Cards'

import { Room } from '../pages/Room'

import { HowToPlay } from '../pages/HowToPlay'

import { Rules } from '../pages/Rules'

import { Game } from '../pages/Game'

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            replace
            to="/conectar"
          />
        }
      />

      <Route
        path="/conectar"
        element={<Login />}
      />

      <Route
  path="/conta-criada"
  element={<AccountCreated />}
/>

      <Route
        path="/registrar"
        element={<Register />}
      />

      <Route
  path="/redefinir-senha"
  element={<ResetPassword />}
/>

      <Route
        path="/recuperar-senha"
        element={
          <RecoverPassword />
        }
      />

     <Route
  path="/inicio"
  element={<Home />}
/>

<Route
  path="/sala/:code"
  element={<Room />}
/>

<Route
  path="/perfil"
  element={<Profile />}
/>

<Route
  path="/cartas"
  element={<Cards />}
/>

<Route
  path="/criar-sala"
  element={<CreateRoom />}
/>

<Route
  path="/entrar-sala"
  element={<EnterRoom />}
/>

<Route
  path="/como-jogar"
  element={<HowToPlay />}
/>

<Route
  path="/regras"
  element={<Rules />}
/>

<Route
  path="/partida/:code"
  element={<Game />}
/>

    </Routes>
  )
}