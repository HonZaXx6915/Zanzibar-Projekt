import './Footer.css'

const FB = 'https://www.facebook.com/'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__line">
          <span className="footer__name">Zanzibar Ládví</span>
          <span className="footer__sep">|</span>
          <a href="#denni-menu">Menu</a>
          <span className="footer__sep">|</span>
          <a href={FB} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <span className="footer__sep">|</span>
          <a href="#kontakt">Kontakt</a>
          <span className="footer__sep">|</span>
          <a href="https://bar-zanzibar.cz" target="_blank" rel="noreferrer">
            bar-zanzibar.cz
          </a>
          <span className="footer__sep">|</span>
          <a href="tel:+420775955680">+420 775 955 680</a>
        </p>
        <p className="footer__copy">
          © {year} Zanzibar Ládví. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  )
}
