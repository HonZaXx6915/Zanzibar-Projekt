import './About.css'

function IconDineIn() {
  return (
    <svg className="about__icon-svg" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 10h4v28h-4V10zm16 0h4v12h6v4h-6v12h-4V26h-6v-4h6V10z"
      />
    </svg>
  )
}

function IconTakeaway() {
  return (
    <svg className="about__icon-svg" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 14h24l2 6H10l2-6zm2 8h20v16H14V22zm4 4v8h12v-8H18z"
      />
    </svg>
  )
}

function IconGrill() {
  return (
    <svg className="about__icon-svg" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 34c2-8 6-12 14-12s12 4 14 12H10zm4-14c1.5-4 5-8 10-8s8.5 4 10 8c-3-2-6.5-3-10-3s-7 1-10 3zm8-10c0-2 2-4 4-4s4 2 4 4-2 3-4 3-4-1-4-3z"
      />
    </svg>
  )
}

const features = [
  {
    title: 'Posezení u nás',
    text: 'Teplá hospůdka pro oběd i večer s přáteli.',
    icon: <IconDineIn />,
  },
  {
    title: 'S sebou',
    text: 'Rychlé balení na cestu z práce i domů.',
    icon: <IconTakeaway />,
  },
  {
    title: 'Z grilu',
    text: 'Maso z grilu, klasiky i poctivé porce.',
    icon: <IconGrill />,
  },
]

export function About() {
  return (
    <section id="o-nas" className="about section" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__intro section__head">
          <h2 id="about-title" className="section__title">
            Malá hospoda se srdcem
          </h2>
          <p className="about__text">
            Malá poctivá hospoda v Praze 8 – Ládví. Velké porce, skvělé ceny a
            domácí atmosféra. Majitel vaří i točí pivo osobně.
          </p>
        </div>
        <ul className="about__grid">
          {features.map((f) => (
            <li key={f.title} className="about__card">
              <div className="about__icon-wrap" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="about__card-title">{f.title}</h3>
              <p className="about__card-text">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
