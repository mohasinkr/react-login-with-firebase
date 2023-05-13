import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/');
  }

  return (
    <div className='p-4 box'>
      <p>Hello Welcome</p>
      <span className='email'></span>
      <div className="d-grid">
        <Button variant='primary' onClick={handleClick}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Home;