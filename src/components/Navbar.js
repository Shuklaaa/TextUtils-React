import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DARK MODE</label>
      </div>
    </div>
  </div>
</nav>
  )
}

//props are basically arguments passed in the functions 
// And prop types tell us about what argument type needs to be passed for ex in App.js we have passed title:"String" and here below we have set  proptypes title as string. If we pass any integer it will show eroor on the console when we inspect the browser
// .isRequired is used so that if we dont pass that prop then it will throw a error

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}


//defaultprops are provided in case if we dont pass any props for some thing then it will be the defaultProp
Navbar.defaultProps = {    //iska mtlb konsi value use kre agr proptype pass na kia jae to
     title: 'Set title here',
     aboutText: 'ABOUT US'
 }
