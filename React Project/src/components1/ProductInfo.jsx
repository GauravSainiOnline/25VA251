import React from 'react'

const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock"
}

function ProductInfo() {
    return (
        <div>
            <p>Product Name: {product.name} </p>
            <p>Product Price: ${product.price}</p>
            <p>Product availability: {product.availability}</p>
        </div>
    )
}

export default ProductInfo;