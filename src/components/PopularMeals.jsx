import './PopularMeals.css'

const meals = [
  {
    title: 'Tripl Mix Sýrů',
    caption: 'Tři druhy sýra, salát, dip',
    image:
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Kotletky s hranolkami',
    caption: 'Klasika jako od babičky',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Vepřová panenka se sýrovou omáčkou',
    caption: 'Jemné maso, teplá omáčka',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Duo smažáků',
    caption: 'Dvojitá porce, tatarka',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Vepřový a kuřecí špíz',
    caption: 'Z grilu s přílohou',
    image:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
  },
]

export function PopularMeals() {
  return (
    <section
      id="oblibene"
      className="popular section"
      aria-labelledby="popular-title"
    >
      <div className="popular__inner">
        <header className="popular__header section__head">
          <p className="section__eyebrow">Oblíbené</p>
          <h2 id="popular-title" className="section__title">
            Jídla, která u nás frčí
          </h2>
          <p className="popular__lede">
            Velké fotky, ještě větší chuť — vyberte si z hitů, na které se
            zákazníci vracejí nejčastěji.
          </p>
        </header>
        <ul className="popular__grid">
          {meals.map((meal) => (
            <li key={meal.title} className="popular__card">
              <div className="popular__media">
                <img
                  src={meal.image}
                  alt=""
                  width={600}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="popular__media-shade" aria-hidden="true" />
              </div>
              <div className="popular__body">
                <h3 className="popular__card-title">{meal.title}</h3>
                <p className="popular__caption">{meal.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
