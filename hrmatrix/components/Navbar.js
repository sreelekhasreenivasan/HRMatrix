import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid">
            <img src="./226-2261312_employee-clipart-employee-icon-employee-management-system-logo-removebg-preview.png"
                alt="logo" width="50" height="50" className="me-3"></img> 

            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav fw-semibold">
                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold" href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
            <a href="/login"><button className="btn btn-danger fw-semibold">LOGIN</button></a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar