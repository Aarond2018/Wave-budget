import React, { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import About from '../components/Home/About/About'
import Benefits from '../components/Home/Benefits/Benefits'
import Form from '../components/Home/Form/Form'
import Hero from '../components/Home/Hero/Hero'
import Info from '../components/Home/Info/Info'
import Terms from '../components/Home/Terms/Terms'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Info />
        <Benefits />
        <Form />
        <Terms />
        <About />
      </main>
      <Footer />
    </Fragment>
  )
}
