import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import Cardone from './components/Cardone'
import CardThree from './components/CardThree'
import Related from './components/Related'
import Signup from './components/Signup'
import Footer from './components/Footer'
import CardFour from './components/CardFour'
function App() {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Home />
      <Card/>
      <Cardone/>
      <CardThree/>
      <CardFour/>
      <Related/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default App
