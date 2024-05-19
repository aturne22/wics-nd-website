import { useState } from 'react'
import wicsLogo from './assets/wicsLogo.png'
import './App.css'

function App() {
  return (
    <>
      <div>
          <img src={wicsLogo} className="logo" alt="WiCS Logo" />
      </div>
      <h1>We are Women In Computer Science at the University of Notre Dame</h1>
      <div className="card">
        <p>
        Dedicated to building a community of women in technology
        </p>
      </div>
    </>
  )
}

export default App
