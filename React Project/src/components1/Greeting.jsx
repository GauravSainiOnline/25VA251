import React from 'react'

const name = " Gaurav ";
const date = new Date().toLocaleTimeString();

function Greeting() {
  return (
    <div>
        <h1>Hello {name} Sir!</h1>
        <p>{date}</p>
    </div>
  )
}

export default Greeting;