import React from 'react'

function Product(props) {
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <p>Price: {props.price}</p>
    </div>
  )
}

export default Product;