import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'


export default function Hero() {
  const [{ theme }] = useContext(ThemeContext)
  const heroStyle = {
    backgroundColor: theme.heroBg,
    color: theme.heroText
  }

  return (
    <section id="hero"
      style={heroStyle}>
      <h1 style={{ color: theme.heroAccent }}> Hi, I'm Adrianne!</h1>
      <h2>Currently seeking opportunities to help build beautiful, useful, and useable experiences.</h2>
    </section>
  )
}
