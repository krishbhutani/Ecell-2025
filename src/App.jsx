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
import Contact from './Components/Contact'
import About from "./Components/About"
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './ScrollToTop'
import Coming_Soon from './Components/Coming_Soon'
import Summit from './Components/summit/Summit.jsx'
import Passes from './Components/summit/Passes.jsx'
import Merchandise from "./Components/summit/merchandise.jsx"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <ScrollToTop />
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
          <ScrollToTop />
          <Navbar />
          <About />
          <Footer />
        </div>
    },
    {
      path: '/alumni',
      element:
        <div>
          <ScrollToTop />
          <Navbar />
          <Alumni />
          <Footer />
        </div>
    },
    {
      path: '/team',
      element:
        <div>
          <ScrollToTop />
          <Navbar />
          <TeamMem />
          <Footer />
        </div>
    },
    {
      path: '/contact',
      element:
        <div>
          <ScrollToTop />
          <ToastContainer />
          <Navbar />
          <Contact />
          <Footer />
        </div>
    },

    {
      path: '/coming',
      element:
        <div>
          <ScrollToTop />
          <Navbar />
          <Coming_Soon />
          <Footer />
        </div>
    },

    {
      path: '/summit',
      element:
        <div>
          <ScrollToTop />
          <Summit />
        </div>
    },

    {
      path: '/summit/passes',
      element:
        <div>
          <ScrollToTop />
          <Passes/>
         
        </div>
    },

    {
      path: '/summit/merchandise',
      element:
        <div>
          <ScrollToTop />
          <Merchandise/>
         
        </div>
    },


  ]
)

const App = () => {
  return (
    <div className='w-full'>
      <RouterProvider router={router} />
    </div>


  )
}

export default App
