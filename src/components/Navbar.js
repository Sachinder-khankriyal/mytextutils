import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==="dark"||props.mode==="warning"?"dark":"light"} bg-${props.mode}` }>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyTextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>   
            </li>
          </ul>
          <div className="d-flex">
            <button type="button" onClick={props.toggleMode} name="primary" className="btn btn-primary btn-style mx-1"></button>
            <button type="button" onClick={props.toggleMode} name="secondary" className="btn btn-secondary btn-style mx-1"></button>
            <button type="button" onClick={props.toggleMode} name="success" className="btn btn-success btn-style mx-1"></button>
            <button type="button" onClick={props.toggleMode} name="dark" className="btn btn-dark btn-style mx-1"></button>
            <button type="button" onClick={props.toggleMode} name="light" className="btn btn-light btn-style mx-1"></button>
          </div>
        </div>

      </div>
    </nav>
  );
}
