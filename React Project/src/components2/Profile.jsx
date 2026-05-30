import React, { useState } from 'react'

function Profile() {

    const [profile, setProfile] = useState({
        name: "",
        age: ''
    });
    const [name, setName] = useState('');
    const [age, setAge] = useState();

    const updateInfo = (e)=>{
         e.preventDefault();
           setProfile({...profile, name: name, age: age})
           setName ('');
           setAge('');
    }


    return (
        <div>
            <h1>Profile Information</h1>
            <form onSubmit={updateInfo}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter your Age' />
                <button type="submit">Update Inforamtion</button>
            </form>

            <h1>Name: {profile.name}</h1>
            <h3>Age: {profile.age}</h3>
        </div>
    )
}

export default Profile;