import React from 'react'

function UserList() {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];
    return (
        <main>
            {/* {users.map((user)=>(
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                </ul>
            ))} */}

            {/* Using Destructuring  */}

            {users.map(({id, name, age}) =>(
                <ul key={id}>
                    <li>{name}</li>
                    <li>{age}</li>
                </ul>
            ))}

        </main>
    )
}

export default UserList;