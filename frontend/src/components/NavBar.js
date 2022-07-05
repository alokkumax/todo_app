import React from 'react'
import '../Styles/list.css'

// import "../Styles/navbar.css";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand brand" href="#">TODO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active brand" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <button className="btn btn-outline-success mx-1" type="submit">Logout</button>
            <button className="btn btn-outline-success mx-1" type="submit">Register</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
