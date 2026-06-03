import './Reviews.css'

const testimonials = [
  {
    quote:
      'Poctivá česká hospoda jak má být. Velké porce, skvělé ceny a příjemný majitel.',
    author: 'Jana K.',
    meta: 'Stálá hostka',
  },
  {
    quote:
      'Obědy chodím pravidelně — rychlé obsloužení a pořád teplé talíře. Grillová nabídka je top.',
    author: 'Martin P.',
    meta: 'Z okolních kanceláří',
  },
  {
    quote:
      'Skvělý poměr cena/výkon. Pivo točené férově a kuchyně voní po celé hospodě.',
    author: 'Petr a Lenka',
    meta: 'Večerní návštěva',
  },
]

function Stars({ filled = 5 }) {
  return (
    <span className="reviews__stars" aria-label={`Hodnocení ${filled} z 5 hvězd`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < filled ? 'reviews__star reviews__star--on' : 'reviews__star'
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  )
}

export function Reviews() {
  return (
    <section id="recenze" className="reviews section" aria-labelledby="reviews-title">
      <div className="reviews__inner">
        <header className="reviews__header section__head">
          <h2 id="reviews-title" className="section__title">
            Co říkají hosté
          </h2>
          <div className="reviews__summary">
            <Stars />
            <p className="reviews__summary-text">
              <strong>4,7 / 5</strong> z <strong>219</strong> recenzí
            </p>
          </div>
        </header>
        <ul className="reviews__grid">
          {testimonials.map((t) => (
            <li key={t.author} className="reviews__card">
              <Stars />
              <blockquote className="reviews__quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <footer className="reviews__footer">
                <cite className="reviews__author">{t.author}</cite>
                <span className="reviews__meta">{t.meta}</span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
