import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';

function UpdateUser() {
    const {updateUser} = useContext(UserContext);

    const [newName, setNewName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateUser(newName);
        setNewName('');
    }
  return (
    <>
    <h1>Update User Name</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={(e)=>{setNewName(e.target.value)}} placeholder='Enter your name'/>
        <button type='submit'>Update</button>
    </form>
    </>
  )
}

export default UpdateUser;