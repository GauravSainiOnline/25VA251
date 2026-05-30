import React from 'react'
import { FaBeer } from "react-icons/fa";


function IconComponent() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center',  width: 1260, backgroundColor: 'teal', height: 550 }}>
            <FaBeer style={{ fontSize:30, color:'gold'}} />
        </div>
    )
}

export default IconComponent;