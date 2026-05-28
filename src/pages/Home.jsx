import { Hero } from '../components/Hero.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home-hero-decor" />

      <section className="section section--wide reveal">
        <div className="section__head">
          <p className="section__eyebrow">Statistiky</p>
          <h2 className="section__title">Co dělá Zanzibar výjimečným</h2>
        </div>

        <div className="numbers-grid">
          <div className="number-card">
            <span>10</span>
            <h3>let zkušeností</h3>
            <p>Pomáháme hostům v Praze 8 už více než dekádu.</p>
          </div>
          <div className="number-card">
            <span>20+</span>
            <h3>jídel na výběr</h3>
            <p>Poctivé pokrmy, jedno místo pro každý den i slavnost.</p>
          </div>
          <div className="number-card">
            <span>Tisíce</span>
            <h3>spokojených hostů</h3>
            <p>Naše atmosféra baví místní i návštěvníky už roky.</p>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section__head">
          <p className="section__eyebrow">Atmosféra</p>
          <h2 className="section__title">Jaký je zážitek u nás</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-media">🍷</div>
            <h3 className="feature-title">Interiér</h3>
            <p className="feature-desc">Elegantní lounge s teplým dřevem, útulnými koutky a pečlivě vybraným osvětlením.</p>
          </article>

          <article className="feature-card">
            <div className="feature-media">👨‍🍳</div>
            <h3 className="feature-title">Kuchyně</h3>
            <p className="feature-desc">Otevřená kuchyně, poctivá technika a sezónní suroviny připravené s péčí.</p>
          </article>

          <article className="feature-card">
            <div className="feature-media">🍸</div>
            <h3 className="feature-title">Drinky</h3>
            <p className="feature-desc">Koktejly s lehkou kouzelnou linkou a lokální řemeslná piva pro každou náladu.</p>
          </article>

          <article className="feature-card">
            <div className="feature-media">🎶</div>
            <h3 className="feature-title">Atmosféra</h3>
            <p className="feature-desc">Hudba, pozorný servis a společenské momenty, které si budeš pamatovat.</p>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <div className="quote-card">
          <p className="citat">Citát:</p>
          <p>„Jídlo chutná nejlépe tam, kde se cítíš jako doma.“</p>
          <strong>Zanzibar Ládví</strong>
        </div>
      </section>
    </>
  )
}
