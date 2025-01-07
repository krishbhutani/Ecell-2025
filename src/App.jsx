import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Cooper from './Components/Cooper'
import Initiatives from './Components/Initiatives'
import Past_speaker from './Components/Past_speaker'
import Events from './Components/Events'
import Gallery from './Components/Gallery'
import Team from './Components/Team'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Header />
      <Cooper/>
      <Initiatives/>
      <Past_speaker/>
      <Events/>
      <Gallery/>
      <Team/>
      <Footer/>
    </div>


  )
}

export default App
