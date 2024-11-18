// Creating the ProductList Component

import { React } from 'react'
import ProductItem from "./ProductItem";

function ProductList ({ products }) {
    return (
        // using map function to render ProductItem component
    <div>
        <h2>Products:</h2>
        {/*Already implemented key props, putting this so it'll show in the Github commit*/}
        <ul>
            {products.map((product) => (
                <ProductItem 
                    key={product.id}
                    product={product}
                />
            ))}
        </ul>
    </div>
    )
}

// exporting for App.jsx
export default ProductList