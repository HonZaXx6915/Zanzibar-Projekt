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
            <span>5</span>
            <h3>let zkušeností</h3>
            <p>Pomáháme hostům v Praze 8 už více než dekádu.</p>
          </div>
          <div className="number-card">
            <span>20+</span>
            <h3>jídel na výběr</h3>
            <p>Poctivé pokrmy, jedno místo pro každý den i slavnost.</p>
          </div>
          <div className="number-card">
            <span>100</span>
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

        <div className="atmosphere-grid">
          <div className="experience-card">
            <h3>Interiér</h3>
            <p>Teplé osvětlení, dřevo a příjemné koutky pro každý stůl.</p>
          </div>
          <div className="experience-card">
            <h3>Kuchař při práci</h3>
            <p>Čerstvá příprava přímo před tebou, nic není schované.</p>
          </div>
          <div className="experience-card">
            <h3>Drinky</h3>
            <p>Osvěžující koktejly i lokální piva, která dotvářejí večer.</p>
          </div>
          <div className="experience-card small">
            <h3>Ambience</h3>
            <p>Hudba, smích a pulzující nálada vytvářejí opravdový zážitek.</p>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section__head">
          <p className="section__eyebrow">Speciál</p>
          <h2 className="section__title">Chef’s choice</h2>
        </div>

        <div className="special-card floating">
          <h3>Dnešní speciál</h3>
          <p>Speciální hovězí žebírka se sezónní marinádou, pomalu pečená pro maximální chuť.</p>
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
