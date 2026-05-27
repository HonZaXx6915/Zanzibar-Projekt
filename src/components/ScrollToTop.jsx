import { useEffect, useRef, useState } from 'react'
import './ScrollToTop.css'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const doc = document.documentElement
      const total = Math.max(1, doc.scrollHeight - window.innerHeight)
      const pct = Math.max(0, Math.min(1, scrollY / total))
      setProgress(Math.round(pct * 100))
      setVisible(scrollY > 120)
    }

    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Vrátit se nahoru"
      style={{ ['--progress']: `${progress}%` }}
    >
      <svg className="scroll-top__svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M24 10 L10 28 H17 V38 H31 V28 H38 L24 10 Z" fill="currentColor" />
      </svg>
    </button>
  )
}

export default ScrollToTop
