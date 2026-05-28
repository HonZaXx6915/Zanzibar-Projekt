import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFoundPage() {
  return (
    <section className="notfound" aria-labelledby="notfound-title">
      <div className="notfound__card">
        <div className="notfound__ring" aria-hidden="true" />
        <span className="notfound__code">404</span>
        <h1 id="notfound-title" className="notfound__title">
          Tuhle stránku někdo snědl!
        </h1>
        <p className="notfound__text">
          Zdá se, že tahle cesta nevede do kuchyně. Pojď zpátky, stůl už na tebe čeká.
        </p>
      </div>
    </section>
  )
}
