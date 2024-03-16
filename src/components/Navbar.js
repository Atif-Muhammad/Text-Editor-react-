import React from 'react'

export default function Navbar(props) {

  return (
    <div>
      <nav className="navbar border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'  style={props.mode}>Text Editor</a>
          <div className="form-check form-switch d-flex align-items-center">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label ps-2" htmlFor="flexSwitchCheckDefault">{props.darkText}</label>
            <form className="d-flex ps-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit" style={props.btnMode}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
