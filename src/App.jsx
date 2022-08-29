import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import routes from './routes';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Routes>
        {
          routes.map((res, index) => (
            <Route path={res.path} element={res.component} key={index} />
          ))
        }
      </Routes>
    </div>
  )
}

export default App;