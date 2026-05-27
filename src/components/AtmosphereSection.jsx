import './AtmosphereSection.css'

export function AtmosphereSection() {
  return (
    <section className="atmosphere" aria-labelledby="atmosphere-title">
      <div className="atmosphere__container">
        <h2 id="atmosphere-title" className="atmosphere__title">Vibe Zanzibaru</h2>
        <p className="atmosphere__subtitle">Více než jen hospoda - je to zkušenost</p>
        
        <div className="atmosphere__grid">
          <div className="atmosphere__card">
            <div className="atmosphere__card-icon">🎵</div>
            <h3 className="atmosphere__card-title">Živá hudba</h3>
            <p className="atmosphere__card-text">
              Čtvrtek až sobota si užijte live hudbu. Od bluesy po folku - vždy s patřičným vibe.
            </p>
          </div>

          <div className="atmosphere__card">
            <div className="atmosphere__card-icon">👥</div>
            <h3 className="atmosphere__card-title">Komunita</h3>
            <p className="atmosphere__card-text">
              Tady se setkávají herci, hudebníci, podnikatelé i řemeslníci. Každý má zde své místo.
            </p>
          </div>

          <div className="atmosphere__card">
            <div className="atmosphere__card-icon">🌙</div>
            <h3 className="atmosphere__card-title">Nálada</h3>
            <p className="atmosphere__card-text">
              Teplé osvětlení, dřevo, grill... Atmosféra, kterou nenajdete na každém rohu.
            </p>
          </div>

          <div className="atmosphere__card">
            <div className="atmosphere__card-icon">🤝</div>
            <h3 className="atmosphere__card-title">Rodina</h3>
            <p className="atmosphere__card-text">
              Vedeni stejným nadšením už 20 let. Známe svoje hosty a oni znají nás.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
