import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const isTransparent = pathname === '/' && !scrolled

  return (
    <nav className={`navbar${isTransparent ? ' navbar-transparent' : ''}${open ? ' menu-open' : ''}`} aria-label="Main navigation">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          Batista Cleaning Service
        </NavLink>

        <ul id="main-menu" className={`navbar-links${open ? ' open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setOpen(false)}>Our Services</NavLink></li>
          <li>
            <NavLink to="/contact" className="navbar-cta" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
