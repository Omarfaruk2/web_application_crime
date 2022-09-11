import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import Home from './Home/Home'
import "./app.scss"
import ReactPlayer from 'react-player'

// ..
AOS.init()
const App = () => {

  return (
    <div>
      <Home />

      {/* <ReactPlayer controls playing={true} url="https://youtu.be/7sDY4m8KNLc" /> */}

    </div>
  )
}

export default App