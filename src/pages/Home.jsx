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

      <section className="section reveal chef-choice">
        <div className="section__head">
          <p className="section__eyebrow">Speciál</p>
          <h2 className="section__title">Chef’s choice</h2>
        </div>

        <div className="chef-grid">
          <div className="chef-feature">
            <div className="chef-hero">
              <div className="chef-hero__media" aria-hidden>
                <img src="/assets/chef-special.jpg" alt="Dnešní special" onError={(e)=>{e.target.style.display='none'}} />
              </div>
              <div className="chef-hero__body">
                <span className="eyebrow">Dnes od šéfa</span>
                <h3>Dnešní special</h3>
                <p>Pomalu pečené hovězí žebírka s pečenou dýní, křupavým šalotkovým glaze a pečenými bylinkami.</p>
                <div className="chef-hero__meta">Doporučeno s červeným vínem · 320 Kč</div>
              </div>
            </div>
          </div>

          <div className="chef-cards">
            <article className="dish-card">
              <div className="dish-media"><img src="/assets/dish1.jpg" alt="Grilovaný losos" onError={(e)=>{e.target.style.display='none'}}/></div>
              <div className="dish-body">
                <h4>Grilovaný losos</h4>
                <p>Citronové beurre blanc a sezónní listy.</p>
              </div>
            </article>

            <article className="dish-card">
              <div className="dish-media"><img src="/assets/dish2.jpg" alt="Kachní prsa" onError={(e)=>{e.target.style.display='none'}}/></div>
              <div className="dish-body">
                <h4>Kachní prsa</h4>
                <p>Glazovaná kachna s karamelizovanou fíkovou omáčkou.</p>
              </div>
            </article>

            <article className="dish-card">
              <div className="dish-media"><img src="/assets/dish3.jpg" alt="Vegetariánský talíř" onError={(e)=>{e.target.style.display='none'}}/></div>
              <div className="dish-body">
                <h4>Vegetariánský talíř</h4>
                <p>Sezónní pečená zelenina, hummus a ořechové pesto.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="quote-card">
          <p>„Jídlo chutná nejlépe tam, kde se cítíš jako doma.“</p>
          <strong>Zanzibar Ládví</strong>
        </div>
      </section>
    </>
  )
}
