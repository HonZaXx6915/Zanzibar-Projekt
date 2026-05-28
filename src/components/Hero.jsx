import './Hero.css'
import { Link } from 'react-router-dom'

const HERO_BG =
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=80'

export function Hero() {
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
          <p className="hero__subtitle">Chuť vytvořená ohněm</p>
          <p className="hero__note">
            Prémiové maso, autentický grill a atmosféra inspirovaná exotikou Zanzibaru.
          </p>
          <div className="hero__actions">
            <Link className="hero__btn hero__btn--primary" to="/menu">
              Zobrazit menu
            </Link>
            <Link className="hero__btn hero__btn--ghost" to="/kontakt">
              Najít nás
            </Link>
          </div>
          <Link className="hero__badge" to="/recenze">
            <span className="hero__badge-stars" aria-hidden="true">
              ★★★★★
            </span>
            <span className="hero__badge-text">
              <strong>4,7</strong> / 5 <span className="hero__badge-muted">(219 recenzí)</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
