//import React from 'react'

import BestSaller from "../components/BestSaller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSaller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home