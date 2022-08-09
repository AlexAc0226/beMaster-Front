import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { get_all_users } from '../../../redux/actions/index'

function GetAllUsers() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataAllUser)
    
    const nav = useNavigate()
    /* useEffect(() => {
        dispatch(get_all_users())
    } , [ dispatch ])
 */


    return (
    <div>
      <h1>Lista de usuarios</h1>
        {
            data && data.map(e=>
            <ul key={e.id}>
              <li>{e.id}</li>
              <li>{e.user_name}</li>
              <li>{e.email}</li>
              <button onClick={()=>nav(`/home/user/update/${e.id}`)}>Editar</button>
            </ul>)
        }
    </div>
  )
}

export default GetAllUsers
