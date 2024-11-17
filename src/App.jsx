import { useState } from 'react'
import './App.css'
// planning out future imports
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm.jsx";



function App() {
  // initializing an array of objects
const products = [
  {
   id: 1975,
   name: "EasyWrite Digital Stylus",
   price: 49.99,
   description: "A digital stylus for immersive writing."
  },
 
  {
   id: 2999,
   name: "EasyType Mechanical Keyboard",
   price: 129.99,
   description: "A linear keyboard for smooth typing."
  },
 
  {
   id: 5457,
   name: "EasyScroll Ergonomic Mouse",
   price: 79.99,
   description: "A carefully engineered mouse for comfortable scrolling."
  },
 
  {
   id: 8031,
   name: "EasyView OLED Monitor",
   price: 329.99,
   description: "A cutting-edge monitor for vibrant viewing."
  }

  
 ]

// passing list of products to ProductList component
  return (
    <>
      <div>
          <h1> Product Dashboard </h1>
          <ProductList products={products}/>
      </div>
    </>
  )
}


export default App


