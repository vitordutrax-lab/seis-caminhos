import { Link } from 'react-router-dom'

import { MainLayout } from '../../layouts/MainLayout'

import './Home.css'

export function Home() {
  return (
    <MainLayout>
      <div className="home-container">
        <div>
          <h1>Seis Caminhos</h1>

          <Link to="/conectar">
            Entrar
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}