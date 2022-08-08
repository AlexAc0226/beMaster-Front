import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { get_detail } from "../../redux/actions/index";

import './Details.css';

function Details() {

  const dispatch = useDispatch();
  const paramas = useParams();
  const navigate = useNavigate();
  const detail = useSelector(state => state.details)


  useEffect(() => {
    let contentId = paramas.id;
    dispatch(get_detail(contentId))
  }, [dispatch, paramas.id]);

  const navegation = () => {
    navigate("/home");
  };

  return (
    <div className="container">
    <nav class="navbar bg-light">
      <div class="container-fluid">
      <button type="button" onClick={navegation} class="btn btn-primary">Ir atras</button>
      </div>
    </nav>
    {
      detail ? (
        detail.map((e, i) => (
          <div key={i} className="">
            <div className="detail-container">
                <div className="detail-img">
                  <img src={e.img} alt="img not fond" />
                  <h1>{e.title}</h1>
                  <p>{e.description}</p>
                  
                </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      ) 
    }
  </div>
  );
}

export default Details



