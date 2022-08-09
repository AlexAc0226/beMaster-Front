import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


import { update_user } from '../../../redux/actions/index'

function FormUpdateUser() {
      const [inputState,setState] =useState({
        user_name:'',
        email:'',
        isAdmin:false
      })
      const nav =useNavigate()
      const token = useSelector(state => state.dataUser.token)
      const params = useParams()
      const id = params.id 

      const user = async()=>{
          const result = await axios.get(`http://localhost:3001/api/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` }})
          setState({
            user_name:result.data.user_name,
            email:result.data.email,
            isAdmin:result.data.isAdmin
          })

      }

      useEffect(() => {
            user()
            console.log(token)
      } , [params])

      const dispatch = useDispatch()

        function handleInputChange(e){
          console.log(e.target.value)  
          setState({
                ...inputState,
                [e.target.name]:e.target.value
          })
        }

        function handleCheboxChange(e){
          console.log(e.target.checked)  
          setState({
                ...inputState,
                [e.target.name]:!inputState
          })
        }

        function handleSubmit(e){
            e.preventDefault()
           
            const response =async()=> await axios.put(`http://localhost:3001/api/users/${id}`,
            {data:{user_name:inputState.user_name,email:inputState.email,isAdmin:inputState.isAdmin }
            }, 
            {headers: { Authorization: `Bearer ${token}`}}).then(data=>console.log(data)).then(nav('/home'))
           
            response()
            setState({
                user_name:'',
                email:'',
                isAdmin:false
            })
        }
            

  return (
    <>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label>User Name </label><br/>
          <input type="text" name='user_name'  onChange={(e)=>handleInputChange(e)} value={inputState.user_name}/><br/>
        <label>Email</label><br/>
          <input type="text" name='email'  onChange={(e)=>handleInputChange(e)} value={inputState.email}/><br/>
        <label>Is admin?</label><br/>
          <input type="checkbox" name='isAdmin' onChange={(e)=>handleCheboxChange(e)} value={inputState.isAdmin}/><br/>
          <button type='submit'>submit</button>
      </form> 
    </>
  )
}

export default FormUpdateUser
