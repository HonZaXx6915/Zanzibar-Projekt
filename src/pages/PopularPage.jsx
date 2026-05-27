import { PopularMeals } from '../components/PopularMeals.jsx'

export default function PopularPage() {
  return (
    <section className="section">
      <div className="section__head">
        <h2 className="section__title">Oblíbené</h2>
      </div>
      <PopularMeals />
    </section>
  )
}
