import './SpecialsSection.css'

export function SpecialsSection() {
  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="specials__container">
        <h2 id="specials-title" className="specials__title">Proč zrovna Zanzibar?</h2>
        
        <div className="specials__content">
          <div className="specials__feature">
            <div className="specials__feature-number">01</div>
            <h3 className="specials__feature-title">Grill je naše srdce</h3>
            <p className="specials__feature-text">
              Nemáme zmrazené věci. Všechno se připravuje na našem tradiční grilu s kouřem.
            </p>
          </div>

          <div className="specials__feature">
            <div className="specials__feature-number">02</div>
            <h3 className="specials__feature-title">Recepty od babičky</h3>
            <p className="specials__feature-text">
              Marinády, omáčky a speciální jídla jsou vytvořeny podle tradičních receptů rodiny.
            </p>
          </div>

          <div className="specials__feature">
            <div className="specials__feature-number">03</div>
            <h3 className="specials__feature-title">Kamarádi přátelé</h3>
            <p className="specials__feature-text">
              Tady nejste zákazník - jste kamarád. Personál vás zná a ví, co budete chtít.
            </p>
          </div>

          <div className="specials__feature">
            <div className="specials__feature-number">04</div>
            <h3 className="specials__feature-title">Místní ingredience</h3>
            <p className="specials__feature-text">
              Spolupracujeme s lokálními producenty. Podporujeme tuzemské zemědělce a řemeslníky.
            </p>
          </div>
        </div>

        <div className="specials__cta">
          <p className="specials__cta-text">Chcete si to vyzkoušet?</p>
          <a href="/menu" className="specials__cta-link">Podívejte se na naše speciály</a>
        </div>
      </div>
    </section>
  )
}
