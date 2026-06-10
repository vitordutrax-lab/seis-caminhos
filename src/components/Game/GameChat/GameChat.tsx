import './GameChat.css'

export function GameChat() {
  return (
    <div className="game-chat">

      {/* HEADER */}

      <div className="game-chat-header">
        CHAT
      </div>

      {/* MENSAGENS */}

      <div className="game-chat-messages">

        <div className="game-chat-message">

          <span className="chat-author">
            DUTRAX
          </span>

          <p className="chat-text">
            bora iniciar
          </p>

        </div>

        <div className="game-chat-message">

          <span className="chat-author">
            PLAYER 2
          </span>

          <p className="chat-text">
            preciso de ajuda
          </p>

        </div>

      </div>

      {/* INPUT */}

      <div className="game-chat-input-area">

        <input
          type="text"
          placeholder="Mensagem..."
        />

        <button className="send-button">

  <svg
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 20L21 12L3 4L6 11L14 12L6 13L3 20Z"
    />
  </svg>

</button>

      </div>

    </div>
  )
}