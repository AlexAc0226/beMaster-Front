import React from 'react'
import {useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_content} from '../redux/actions/index'
import Card from '../components/component/Card'
import Nav from "../components/component/Nav"
import style from './Home.module.css'

function HomeUser() {
  
  const data = useSelector(state => state.dataContent)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_all_content())
  },[])

  return (
    <div className="container">
      
      <Nav/>

      <div className={style.homeFlex}>
      <div className="pos-card">
        {
          data.contents && data.contents.map((item, index) => {
            return (
              <div key={index} className="">
                <Card 
                id= {item.id}
                title={item.title}
                img= {item.img}
                />
              </div>
            )
          })
        }
      </div>
        </div>
    </div>
  )
}

export default HomeUser
