import { useState,useEffect } from 'react'
import {Fixed_left} from "./components/Fixed_left.jsx"
import {Informational} from "./components/Informational.jsx"
import {Glow_light} from "./components/Glow_light.jsx"
import './App.css'

function App() {
  
  return (
    <>
      <div className="main">
        <Glow_light/>
        <Fixed_left/>
        <Informational/>
      </div>
    </>
  )
}

export default App
