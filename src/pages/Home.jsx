import React from 'react'
import Artists from '../components/Artists'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Artists />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
