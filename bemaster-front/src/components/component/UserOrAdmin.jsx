import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HomeUser from '../../page/homeUser'
import HomeAdmin from '../../page/homeAdmin'
import Login from '../../components/container/Login'

function UserOrAdmin() {
    const user = useSelector(state => state.dataUser)
    
    const navigate = useNavigate()

    const users = ()=>{
        if (user.isAdmin === undefined || user.isAdmin === null || user.isAdmin.length < 1 ) return <Login/>
        else if(user.isAdmin) return <HomeAdmin/> 
        else if( user.isAdmin === false) return <HomeUser/>  
    }
   

    return (
    <div>
      { users() }
    </div>
  )
}

export default UserOrAdmin
