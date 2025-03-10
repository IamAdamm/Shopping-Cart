import { Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"

function App() {

  return (
    <div className="app"> 
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/shop" element={ <Shop />}/>
        <Route path="/about" element={ <About />}/>
      </Routes>
    </div>
  )
}

export default App
