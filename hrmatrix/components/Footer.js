import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-white mt-5 py-4" style={{backgroundColor: '#004b6b'}}>
        <div className="container">
            <p className="mb-3">© 2025 HRMatrix. All Rights Reserved.</p>
            <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-white" style={{ textDecoration: 'none', fontSize: '1.5rem' }}>
                    <i className="bi bi-facebook"></i>
                </a>
               
                <a href="#" className="text-white" style={{ textDecoration: 'none', fontSize: '1.5rem' }}>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-white" style={{ textDecoration: 'none', fontSize: '1.5rem' }}>
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer