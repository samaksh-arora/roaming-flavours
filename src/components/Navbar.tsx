import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-[background,padding] duration-300 border-b ${
        scrolled
          ? 'bg-secondary/95 backdrop-blur-md border-white/[0.06] py-2.5 px-5'
          : 'bg-transparent border-transparent py-3.5 px-5'
      }`}
    >
      <button
        onClick={() => scrollTo('home')}
        className="font-display text-base font-bold text-accent"
      >
        Roaming Flavours
      </button>

      <div className="flex gap-2">
        <button
          onClick={() => scrollTo('menu')}
          className="rounded-full bg-primary/85 hover:bg-primary px-[18px] py-2 text-[13px] font-semibold text-white transition-colors"
        >
          Menu
        </button>
        <button
          onClick={() => scrollTo('location')}
          className="rounded-full border border-white/20 hover:border-accent px-[18px] py-2 text-[13px] font-semibold text-white hover:text-accent transition-colors"
        >
          Find Us
        </button>
      </div>
    </header>
  )
}
