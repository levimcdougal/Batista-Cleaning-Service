import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
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
          ref={menuButtonRef}
          type="button"
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
      {open && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  )
}
