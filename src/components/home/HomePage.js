import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Redux and ReactRouter for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary btn-lg">
      Learn more
      </Link>
    </div>
  )
}

export default HomePage
