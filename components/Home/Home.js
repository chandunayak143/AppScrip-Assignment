import React from 'react'
import Header from '../Header/Header'
import Recomended from '../Recomended/Recomended'
import FetchingData from '../FetchingData/FetchingData'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
      <Recomended/>
      <FetchingData/>
      <Footer />
    </div>
  )
}

export default Home