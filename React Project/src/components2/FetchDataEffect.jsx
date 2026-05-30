import React, { useEffect, useState } from 'react'

function FetchDataEffect() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(response);
            const data = await response.json();
            setPosts(data);
        }
        fetchData();
    }, [])
    return (
        <div>
            H6ll0 D05T0!

            {posts.map((post) => {
                return (<ul key={post.id}>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
                )
            })}

        </div>
    )
}

export default FetchDataEffect;