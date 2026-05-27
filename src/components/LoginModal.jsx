import { useState } from 'react'
import './LoginModal.css'

export function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      alert(`Email: ${email}\nHeslo: ${password}`)
      setEmail('')
      setPassword('')
      onClose()
    }, 500)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Zavřít modal"
        >
          ✕
        </button>
        
        <div className="modal__content">
          <h2 id="modal-title" className="modal__title">Přihlášení do rezervací</h2>
          <p className="modal__subtitle">Proveďte si rezervaci svého stolu</p>

          <form className="modal__form" onSubmit={handleSubmit}>
            <div className="modal__field">
              <label htmlFor="email" className="modal__label">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="modal__input"
                placeholder="vase@email.cz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="modal__field">
              <label htmlFor="password" className="modal__label">
                Heslo
              </label>
              <input
                id="password"
                type="password"
                className="modal__input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="modal__submit"
              disabled={isLoading}
            >
              {isLoading ? 'Přihlašování...' : 'Přihlásit se'}
            </button>
          </form>

          <p className="modal__help">
            První návštěvu? <a href="/kontakt" className="modal__link">Kontaktujte nás</a>
          </p>
        </div>
      </div>
    </>
  )
}
