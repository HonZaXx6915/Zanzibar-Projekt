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
  const [mobileOpen, setMobileOpen] = useState(false)

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
          <button
            className="header__menu"
            aria-label="Otevřít hlavní menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg
              className="header__menu-icon"
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="1" y="1" width="26" height="5" rx="2.5" fill="currentColor" />
              <rect x="6" y="8" width="16" height="4" rx="2" fill="currentColor" />
              <rect x="1" y="14" width="26" height="5" rx="2.5" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {mobileOpen && (
        <div className="mobile-nav" role="dialog" aria-modal="true">
          <div className="mobile-nav__panel">
            <button
              className="mobile-nav__close"
              aria-label="Zavřít menu"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>
            <ul className="mobile-nav__list">
              {navItems.map((item) => (
                <li key={item.to} className="mobile-nav__item">
                  <Link
                    to={item.to}
                    className="mobile-nav__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="mobile-nav__cta"
              onClick={() => {
                setIsModalOpen(true)
                setMobileOpen(false)
              }}
            >
              Rezervace
            </button>
          </div>
        </div>
      )}
    </>
  )
}
