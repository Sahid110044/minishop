import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="/cart">go to cart</Link>
    </div>
  )
}

export default Home