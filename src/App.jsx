import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Cooper from './Components/Cooper'
import Initiatives from './Components/Initiatives'
import Past_speaker from './Components/Past_speaker'
import Events from './Components/Events'
import Gallery from './Components/Gallery'
import Team from './Components/Team'
import Footer from './Components/Footer'
import Alumni from './Components/Alumni'
import TeamMem from './Components/TeamMem'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <Navbar />
          <Header />
          <Cooper />
          <Initiatives />
          <Past_speaker />
          <Events />
          <Gallery />
          <Team />
          <Footer />
        </div>


    },
    {
      path: '/about',
      element:
        <div>
          <Navbar />
          <Initiatives />
        </div>
    },
    {
      path: '/alumni',
      element:
        <div>
          <Navbar />
          <Alumni />
          <Footer/>
        </div>
    },
    {
      path: '/team',
      element:
      <div>
        <Navbar/>
        <TeamMem/>
        <Footer/>
      </div>
    },
  ]
)

const App = () => {
  return (
    <div className='w-full'>
      <RouterProvider router={router} />

      {/* <Navbar />
      <Header />
      <Cooper />
      <Initiatives />
      <Past_speaker />
      <Events />
      <Gallery />
      <Team />
      <Footer /> */}
    </div>


  )
}

export default App
