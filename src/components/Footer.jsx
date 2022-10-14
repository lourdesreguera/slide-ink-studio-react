import React from 'react'

const Footer = () => {
  return (
    <footer className='b-footer'>
        <div className='b-footer__container'>
            <img src='./images/icon-fb.svg' alt='Icono de Facebook' className='b-footer__icon' />
            <a href='#' className='link text'>Facebook</a>
        </div>
        <div className='b-footer__container'>
            <img src='./images/icon-ig.svg' alt='Icono de Instagram' className='b-footer__icon' />
            <a href='#' className='link text'>Instagram</a>
        </div>
    </footer>
  )
}

export default Footer