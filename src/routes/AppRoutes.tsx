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
        path="/recuperar-senha"
        element={
          <RecoverPassword />
        }
      />

      <Route
        path="/inicio"
        element={<Home />}
      />
    </Routes>
  )
}