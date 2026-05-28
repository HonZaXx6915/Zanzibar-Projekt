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
          <a href="tel:+420123456789">+420 123 456 789</a>
        </p>
        <p className="footer__copy">
          © {year} Made by <a href="https://github.com/HonZaXx6915">Kotrč,</a><p>Patrik, Suchy❤️</p></p>
        
      </div>
    </footer> 
  )
}
