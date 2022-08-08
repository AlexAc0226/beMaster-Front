import { useState} from 'react'
import { useDispatch} from 'react-redux'
import { get_content_by_name } from '../../redux/actions/index'
function Nav() {

  const dispatch = useDispatch()
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
    return ( 

        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand" href="#">Navbar</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h2 className="nav-link active" aria-current="page" href="#">Home</h2>
              </li>

              <ul className="dropdown-menu">
                <li><h2 className="dropdown-item" href="#">Action</h2></li>
                <li><h2 className="dropdown-item" href="#">Another action</h2></li>
                <li><br className="dropdown-divider" /></li>
                <li><h2 className="dropdown-item" href="#">Something else here</h2></li>
              </ul>

              <li className="nav-item">
                <h2 className="nav-link disabled">Disabled</h2>
              </li>
            </ul>
            <form onSubmit={(e)=> handleSubmit(e)} className="d-flex" role="search">
              <input className="form-control me-2" type="search" onChange={handleChange} value={serach} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     );
}

export default Nav;