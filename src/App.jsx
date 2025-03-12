import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';
import { Button, Banner } from "@trussworks/react-uswds";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner>
      An unofficial website of the United States government
    </Banner>
    <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/use-bdc/explore-data">Use BDC / Explore Data</Link></li>
        </ul>
      </nav>

      <h1>Proof of Concept Site</h1>
      <div className="card">
        <Button type="button">Click Me</Button>
        <Button className="custom-button">Styled Button</Button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
