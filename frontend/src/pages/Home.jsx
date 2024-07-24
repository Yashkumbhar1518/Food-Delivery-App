import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Foodcard from '../components/Foodcard/Foodcard'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Foodcard/>
      <Footer/>
    </div>
  )
}

export default Home
