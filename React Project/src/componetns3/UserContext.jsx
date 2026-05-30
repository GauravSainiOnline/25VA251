import React, { createContext, useState } from "react";




export const UserContext = createContext();

function UserProvider() {
    const [userName, setUsername] = useState("Gaurav Saini");
    const updateUser = (newName){
        setUsername(newName)
    }
    
    return (
      <div>
        <UserContext.Provider value={[{userName, updateUser}]}>
            <UserProfile/>
            <UpdateUser/>
        </UserContext.Provider>
      </div>  
    )
}

export default UserProvider;