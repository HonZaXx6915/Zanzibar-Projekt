import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ContactModal } from './ContactModal.jsx'

const navItems = [
  { to: '/o-nas', label: 'O nás' },
  { to: '/menu', label: 'Menu' },
  { to: '/oblibene', label: 'Oblíbené' },
  { to: '/recenze', label: 'Recenze' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="header" role="banner">
        <div className="header__inner">
          <Link className="header__brand" to="/">
            <span className="header__brand-mark" aria-hidden="true" />
            <span className="header__brand-text">
              <span className="header__brand-title">Zanzibar</span>
              <span className="header__brand-sub">Ládví</span>
            </span>
          </Link>
          <nav className="header__nav" aria-label="Hlavní navigace">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link className="header__link" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="header__cta"
            onClick={() => setIsModalOpen(true)}
          >
            Rezervace
          </button>
        </div>
      </header>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
