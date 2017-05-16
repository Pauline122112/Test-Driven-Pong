import React from 'react'
import { Link } from 'react-router-dom'

const DefaultPage = () => (

  <div className='container'>
   <h1>Test Driven Pong</h1>

  <div className='AboutMe'>
     <Link to='/AboutMe'>
           <img src='' alt='How to play pong' />
     </Link>
  </div>

  <div className='Blog'>
     <Link to='/Blog'>
           <img src='' alt='History of Pong' />
     </Link>
  </div>

  <div className='Contact'>
     <Link to='/Contact'>
           <img src='' alt='Why I chose to create this game' />
     </Link>
  </div>

  <div className='WebDesign'>
     <Link to='/WebDesign'>
           <img src='' alt='Other games' />
     </Link>
  </div>

  <div className='GraphicDesign'>
     <Link to='/GraphicDesign'>
           <img src='' alt='Contact me' />
     </Link>
  </div>
  <div className='WebDevelopment'>
     <Link to='/WebDevelopment'>
           <img src='' alt='Comments' />
     </Link>
  </div>

</div>
)

export default DefaultPage
