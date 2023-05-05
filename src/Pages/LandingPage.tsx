import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  return (
    <>
    <div> Landing page</div>
    <Link to='/signup'>
    <button>signup</button>
    </Link>
    <Link to='/login'>
    <button>login</button>
    </Link>
    

    </>
  )
}

export default LandingPage