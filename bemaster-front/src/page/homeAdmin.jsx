import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GetAllUsers from '../components/component/formsAndFunctions/GetAllUsers'

import { get_all_content, get_content_by_name } from '../redux/actions/index'

import Card from '../components/component/Card'

import style from './Home.module.css'

function HomeAdmin() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.dataContent)

  const [serach, setSerach] = useState('')



  function handleChange(e) {
    e.preventDefault()
    console.log(e.target.value )
    setSerach(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      console.log("Formulario no valido");
    } else {
      console.log("Formulario valido");
      dispatch(get_content_by_name(serach))
      setSerach('')
    };
  };

    useEffect(() => {
    dispatch(get_all_content())
  } , [ dispatch,data.dataAllUser ])

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Modificaciones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

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
        <GetAllUsers />
    </div>
  )
}

export default HomeAdmin
