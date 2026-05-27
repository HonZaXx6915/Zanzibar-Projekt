import './Contact.css'

const MAP_EMBED =
  'https://maps.google.com/maps?q=Taussigova+1172%2F1%2C+182+00+Praha+8&t=&z=16&ie=UTF8&iwloc=&output=embed'

export function Contact() {
  return (
    <section id="kontakt" className="contact section" aria-labelledby="contact-title">
      <div className="contact__wrap">
        <div className="contact__intro section__head">
          <p className="section__eyebrow">Kontakt &amp; lokace</p>
          <h2 id="contact-title" className="section__title">
            Přijďte na pivo i talíř
          </h2>
        </div>
        <div className="contact__inner">
          <div className="contact__panel">
            <ul className="contact__list">
              <li>
                <span className="contact__label">Adresa</span>
                <address className="contact__value">
                  Taussigova 1172/1
                  <br />
                  182 00 Praha 8 – Ládví
                </address>
              </li>
              <li>
                <span className="contact__label">Telefon</span>
                <a className="contact__value contact__link" href="tel:+420775955680">
                  +420 775 955 680
                </a>
              </li>
              <li>
                <span className="contact__label">Otevírací doba</span>
                <p className="contact__value">Denně do 22:00</p>
              </li>
            </ul>
            <a
              className="contact__directions"
              href="https://maps.google.com/?q=Taussigova+1172/1+Praha+8"
              target="_blank"
              rel="noreferrer"
            >
              Navigovat v Mapách
            </a>
          </div>
          <div className="contact__map-wrap">
            <iframe
              title="Mapa — Zanzibar Ládví, Taussigova 1172/1"
              className="contact__map"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
