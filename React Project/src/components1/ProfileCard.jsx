import React from 'react'

const stylesDiv = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 8,
    color: 'black',
    width: "30%",
}

const styleImg = {
    width: 200,
    height: 200
}

function ProfileCard() {
    return (
        <div style={stylesDiv}>
            <img src="https://imgcdn.stablediffusionweb.com/2024/3/19/6f59cdf4-d91f-46a2-9623-74c769efc592.jpg" alt="Profile image" style={styleImg} />
            <h1 style={{color: 'crimson' }}>Name: John Choudhary</h1>
            <h2 style={{color: 'teal'}}>Profession: Engineering Student</h2>
            <h3>age: 20</h3>
        </div>
    )
}

export default ProfileCard;