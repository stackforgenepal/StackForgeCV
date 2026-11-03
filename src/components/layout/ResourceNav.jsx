import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeDropdown } from '@/context/ThemeContext'

export default function ResourceNav() {
  return (
    <nav className="top site-nav" aria-label="Main navigation">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="StackForge" />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/templates/">Templates</Link>
        <Link to="/resources/">Resources</Link>
        <span className="thslot">
          <ThemeDropdown />
        </span>
        <Link to="/templates/" className="btn p">Build a CV</Link>
      </div>
    </nav>
  )
}
