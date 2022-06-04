import React from 'react'
import piala from './img/piala.png'

const Header = () => {
  return (
    <div>
        <header>
          <div className='icon py-2 px-4 text-center'>
              <img src={piala} className='App-logo' alt='piala' />
              <br></br>
              7 Days Student
          </div>
      </header>
    </div>
  )
}

export default Header