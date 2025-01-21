
const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <h4 className="text-white">ADMIN</h4>
            <div className="d-flex justify-content-between" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/addemployee">Add Employee</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/manageemployee">Manage Employee</a>
                    </li>
                </ul>
                <a href="/"><button className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-box-arrow-right"></i>
                </button></a>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header