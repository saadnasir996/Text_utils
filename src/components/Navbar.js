// import React from 'react'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
return (                 
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.text}</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>

            </ul>
            <div className={`colorPall text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <div className="form-check form-check-inline" >
                <input className="form-check-input" type="checkbox" disabled={props.mode === 'light'} id="inlineCheckbox1" value="option1" onChange={props.toggleRed} />
                <label className="form-check-label" for="inlineCheckbox1">Red</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" disabled={props.mode === 'light'} value="option2" onChange={props.toggleBlue} />
                <label className="form-check-label" for="inlineCheckbox2">Blue</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" disabled={props.mode === 'light'} value="option3" onChange={props.toggleGreen} />
                <label className="form-check-label" for="inlineCheckbox3">Green</label>
              </div>
            </div>
            <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode}
                Checkbox type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

