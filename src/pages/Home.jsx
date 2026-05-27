import { Hero } from '../components/Hero.jsx'
import { DailyMenu } from '../components/DailyMenu.jsx'
import { Reviews } from '../components/Reviews.jsx'
import { Contact } from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />

      {/* VALUE SECTION */}
      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">Zanzibar Ládví</p>
          <h2 className="section__title">Více než jen hospoda</h2>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p>
            Místo pro setkání, dobré jídlo a večery s přáteli.  
            Poctivá kuchyně, gril a atmosféra Prahy 8.
          </p>
        </div>
      </section>

      {/* FEATURED FOOD (NE full menu) */}
      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">Doporučujeme</p>
          <h2 className="section__title">Naše top jídla</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '2rem auto 0',
            textAlign: 'center',
          }}
        >
          <div className="card">🔥 Grilované maso</div>
          <div className="card">🧀 Smažený sýr</div>
          <div className="card">🍗 Kuřecí steak</div>
        </div>
      </section>

      {/* SMALL MENU PREVIEW (NE full DailyMenu layout) */}
      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">Denní nabídka</p>
          <h2 className="section__title">Polední menu</h2>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p>
            Každý den čerstvé jídlo za férové ceny.
          </p>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <DailyMenu />
        </div>
      </section>

      {/* REVIEWS (still OK but separated) */}
      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">Recenze</p>
          <h2 className="section__title">Co říkají hosté</h2>
        </div>

        <Reviews />
      </section>

      {/* CONTACT CTA */}
      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">Kontakt</p>
          <h2 className="section__title">Zastav se u nás</h2>
        </div>

        <Contact />
      </section>
    </>
  )
}