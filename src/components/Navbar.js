import React from 'react'




function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><b>SQL</b> Editor <img src="https://www.bing.com/th?id=AMMS_2be27a703fc54ba48e8c4dbe0360f099&w=148&h=148&c=7&o=6&dpr=1.25&pid=SANGAM" alt="" width="60" height="50" className="d-inline-block align-text-top"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar