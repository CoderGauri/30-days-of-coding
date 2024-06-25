import React from 'react'
import './Herosection.css'
import Grandposter from './Grandposter'
import Product from './Product'
import Button from './Button'
import Aboutus from './Aboutus'
import Footer from './Footer'


function Herosection() {
  return (
    <>
     <div className='herosection'>
        <Grandposter/>
        <Product/>
        <Button/>
        <Aboutus/>
        <Footer/>
     </div>
    </>
   
  )
}

export default Herosection