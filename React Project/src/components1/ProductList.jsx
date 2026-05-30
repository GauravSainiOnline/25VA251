import React from 'react'

function ProductList() {
    const products = [
        {id: 1, name: "Laptop", price: 2000},
        {id: 2, name: "HeadPhone", price: 700},
        {id: 3, name: "Phone", price: 500}
    ];

  return (
    <div>
        {
            products.map(({id, name, price})=>(
                <ul key={id}>
                    <li>{name}</li>
                    <li>${price}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default ProductList;