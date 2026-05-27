import './StorySection.css'

export function StorySection() {
  return (
    <section className="story" aria-labelledby="story-title">
      <div className="story__container">
        <div className="story__content">
          <h2 id="story-title" className="story__title">Příběh Zanzibaru</h2>
          <p className="story__text">
            Zanzibar se narodil z jedné jednoduché myšlenky - vytvořit místo, kde se setkávají lidi, 
            kde voní grill a všichni se cítí jako doma. Název není náhodný - inspirací nám byla exotická 
            ostrůvka se svým teplounkým srdcem a bohatou historií.
          </p>
          <p className="story__text">
            Každý den zde připravujeme pokrmy s láskou a s důrazem na kvalitu. Naše recepty procházely 
            roky vývoje, a dnes reprezentují to nejlepší z české kulinární tradice se vůní daleké exotiky.
          </p>
          <div className="story__stats">
            <div className="story__stat">
              <p className="story__stat-number">20+</p>
              <p className="story__stat-label">Let tradice</p>
            </div>
            <div className="story__stat">
              <p className="story__stat-number">100%</p>
              <p className="story__stat-label">Domácí recepty</p>
            </div>
            <div className="story__stat">
              <p className="story__stat-number">5★</p>
              <p className="story__stat-label">Láska v každém jídle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
