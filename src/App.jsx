import React from 'react'
import './App.css'
// planning out future imports
import ProductList from './Assets/components/ProductList';
import AddProductForm from "./Assets/components/AddProductForm";



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

 // task 7: implementing function to add new products
 const addProduct = (newProduct) => {
  setProducts([...products, newProduct]);
}


// passing list of products to ProductList component
// now also passing to AddProductForm 
  return (
    <>
      <div>
          <h1><em> Product Dashboard </em></h1>
          <ProductList products={products}/>
          <AddProductForm addProduct={addProduct} />
      </div>
    </>
  )
}


export default App


