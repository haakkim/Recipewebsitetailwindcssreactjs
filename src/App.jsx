import { useState } from 'react'
import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Delivery from './components/Delivery'
import TopPics from './components/TopPics'
import Meal from './components/Meal'
import Categories from './components/Categories'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {

  return (
     <div>
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPics/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
      


     </div>
  )
}

export default App
