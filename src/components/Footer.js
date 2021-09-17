import '../styles/General.scss'
import '../styles/Footer.scss'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

export default function Footer() {
  const [{ theme }] = useContext(ThemeContext)
  const footerStyle = {
    backgroundColor: theme.stripBg,
    color: theme.stripText
  }

  return (
    <section id='footer'
      style={footerStyle}>
      <div className="General__wrapper">
        <p>Adrianne Sebastian 2021</p>
        <p>Made with <i className='fa fa-heart' aria-hidden='true'></i></p>
        <ul className='Footer__links'>
          <li><i className='fa fa-github' aria-hidden='true'></i></li>
          <li><i className='fa fa-codepen' aria-hidden='true'></i></li>
          <li><i className='fa fa-free-code-camp' aria-hidden='true'></i></li>
          <li><i className='fa fa-linkedin' aria-hidden='true'></i></li>
          <li><i className='fa fa-twitter' aria-hidden='true'></i></li>
        </ul>
      </div>
    </section>
  )
}
