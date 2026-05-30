import React, { useEffect, useState } from 'react'

function BasicEffect() {
    const [count, setCount] = useState(0);
    const [someThing, setSomething] = useState(0);

    useEffect(() => {
        console.log("I am Gaurav");
        document.title = `Increment ${count}`;
    }, [someThing]);

    return (
        <div>
            <h2>Thank You God!</h2>
            <h1>count:{count}</h1>
            <h3>Something: {someThing}</h3>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <button onClick={() => setSomething(someThing + 1)}>Increment Something</button>
        </div>
    )
}

export default BasicEffect;