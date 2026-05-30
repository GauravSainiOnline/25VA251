import React from 'react'

function UserStatus({ isLoggedIn, isAdmin }) {
    if (isAdmin && isLoggedIn) {
        return <div><h1>Welcome Admin!</h1>
        </div>
    } else {
        <div><h1>Welcome User!</h1>
        </div>
    }
}

export default UserStatus;