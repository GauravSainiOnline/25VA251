import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);

    const handleDecrement = () => count > 0 ? setCount(count - 1) : count;


  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default Counter;