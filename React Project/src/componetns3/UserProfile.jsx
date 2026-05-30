import React, { useContext } from 'react'
import { UserContext } from './UserContext';

function UserProfile() {
    const userName = useContext(UserContext);
  return (
    <div>
        My name is {userName}.
    </div>
  )
}

export default UserProfile;