import './App.css'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import PopularPage from './pages/PopularPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/oblibene" element={<PopularPage />} />
          <Route path="/recenze" element={<ReviewsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
