import { DailyMenu } from '../components/DailyMenu.jsx'

export default function MenuPage() {
  return (
    <section className="section">
      <div className="section__head">
        <h2 className="section__title">Denní menu</h2>
      </div>
      <DailyMenu />
    </section>
  )
}
