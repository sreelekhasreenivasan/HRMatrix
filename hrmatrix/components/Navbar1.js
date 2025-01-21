

const Navbar1 = () => {
  return (
    <div>
        <nav className="navbar shadow">
        <div className="container justify-content-center">
            <div className="user-info">
                <span className="text-white fw-semibold">Hey Alice</span>
                <img
                  src="png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                  alt="User Avatar"
                  className="navbar-avatar"
                />
                <i className="bi bi-gear-fill settings-icon"></i>
                <a href="/" style={{color: 'white'}}><i className="bi bi-box-arrow-right"></i></a>

            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar1