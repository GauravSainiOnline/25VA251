import React from 'react'

function Header() {
  return <>
  <h1>Welcome To MY Website!</h1>
  <nav style={{display:'flex', flexDirection: 'column', justifyContent:'space-between'}}>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
    </nav>
  </>
}

export default Header;