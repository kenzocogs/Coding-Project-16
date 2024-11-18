// Creating the ProductItem component

import { React } from 'react'

function ProductItem({ product }) {
    // structuring html content of item
    return  (
        <li>
            <h3> {product.name} </h3>
            <h4> ${product.price}</h4>
            <p> {product.description} </p>
        </li>
    );
}

// exporting for ProductList
export default ProductItem;
