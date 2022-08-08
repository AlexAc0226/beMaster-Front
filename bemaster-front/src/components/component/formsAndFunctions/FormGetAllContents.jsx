import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { get_all_users } from '../../../redux/actions/index'

function FormGetAllContents() {
  
  const dispatch = useDispatch()
    const data = useSelector(state => state.dataAllUser)

    useEffect(() => {
        dispatch(get_all_users())
    } , [ dispatch ])

    
    return (
    <div>
      <h1>Todos los usuarios</h1>
        <ul>
            {data.contents && data.map(user => {
                return (
                    <div>
                        <li>{user.id}</li>
                        <li>{user.user_name}</li>
                        <li>{user.email}</li>
                        <br/>
                    </div>
                )
            })
            }
        </ul>

    </div>
  )
}

export default FormGetAllContents
