import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Link to="/">home</Link>
      <Link to="/about" >about</Link>
      <br></br>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App


const Home = () => {
  return (
    <>
      home page
    </>
  )
}

const About = () => {
  return (
    <>
      about js
    </>
  )
}



