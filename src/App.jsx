import { useState } from 'react'
import Nav from './Components/Nav/nav.jsx'
import Home from './Pages/home.jsx'
import Prize from './Pages/prize.jsx'
import Tracks from './Pages/tracks.jsx'
import Noise from "/src/assets/images/White-noise.gif";
import './Components/noise.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="noise"></div>
      <Home />
      <Prize  />
      <Tracks  />
    </>
  )
}

export default App
