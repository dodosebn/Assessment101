import React from 'react'
import NavBar from './components/navBar'
import Intro from './components/intro'
import HorAnimation from './components/horAnimation'
import GenProd from './products/components/genProd'

const page = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <HorAnimation />
      <GenProd />
    </div>
  )
}

export default page
