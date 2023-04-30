import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">ManavNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-3 mb-lg-0">
          <li><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
          <li><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
          <li><Link className="nav-link" aria-current="page" to="/general">General</Link></li>
          <li><Link className="nav-link" aria-current="page" to="/health">Health</Link> </li>
          <li><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
          <li><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
          <li><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}
