import './DailyMenu.css'

const items = [
  { name: 'Zeleninový vývar s noky', price: '40 Kč' },
  { name: 'Pečené kuřecí stehno, špenát, noky', price: '85 Kč' },
  { name: 'Maso na grilu + americké brambory', price: '75 Kč' },
  { name: 'Smažený sýr + americké brambory', price: '99 Kč' },
  { name: 'Smažený řízek + americké brambory', price: '99 Kč' },
]

export function DailyMenu() {
  return (
    <section
      id="denni-menu"
      className="daily section"
      aria-labelledby="daily-title"
    >
      <div className="daily__inner">
        <header className="daily__header section__head">
          <p className="section__eyebrow">Denní nabídka</p>
          <h2 id="daily-title" className="section__title">
            Polední menu
          </h2>
          <p className="daily__lede">
            Každý den čerstvé talíře z kuchyně — rychle, sytě a férově
            naceněné pro sousedy i návštěvníky z okolí Ládví.
          </p>
        </header>
        <article className="daily__card" aria-label="Seznam jídel denního menu">
          <div className="daily__card-head">
            <span className="daily__card-label">Menu dne</span>
            <span className="daily__card-note">Ceny orientační</span>
          </div>
          <ul className="daily__list">
            {items.map((row) => (
              <li key={row.name} className="daily__row">
                <span className="daily__name">{row.name}</span>
                <span className="daily__dots" aria-hidden="true" />
                <span className="daily__price">{row.price}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
