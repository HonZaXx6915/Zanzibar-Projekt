import { useState } from 'react'
import './Hero.css'

const HERO_BG =
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=80'

export function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="uvod" className="hero" aria-labelledby="hero-title">
      <div
        className="hero__bg"
        style={{ '--hero-image': `url(${HERO_BG})` }}
        role="img"
        aria-label="Grilované jídlo a teplé osvětlení hospody"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__stack">
          <p className="hero__eyebrow">Praha 8 · Ládví</p>
          <h1 id="hero-title" className="hero__title">
            Zanzibar Ládví
          </h1>
          <p className="hero__subtitle">Poctivá česká hospoda a grill</p>
          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#denni-menu">
              Zobrazit menu
            </a>
            <a className="hero__btn hero__btn--ghost" href="#kontakt">
              Najít nás
            </a>
            <button
              className="hero__btn hero__btn--accent"
              onClick={() => setIsOpen(true)}
              type="button"
            >
              Rezervace
            </button>
          </div>
          <div className="hero__badge" role="status">
            <span className="hero__badge-stars" aria-hidden="true">
              ★★★★★
            </span>
            <span className="hero__badge-text">
              <strong>4,7</strong> / 5 <span className="hero__badge-muted">(219 recenzí)</span>
            </span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="contact-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          onClick={() => setIsOpen(false)}
        >
          <div className="contact-modal__card" onClick={(e) => e.stopPropagation()}>
            <button
              className="contact-modal__close"
              aria-label="Zavřít"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h2 id="contact-title" className="contact-modal__title">Kontakt</h2>
            <p className="contact-modal__item">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p className="contact-modal__item">
              <strong>Telefon:</strong>{' '}
              <a href="tel:+420123456789">+420 123 456 789</a>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
