import React from 'react'

const Hero = () => {
  return (
    
    <div className="container">
        <div className="hero text-white d-flex shadow-lg p-3 rounded-circle">
            <div>
                <img
                    src="toppng.com-employees-png-happy-employees-png-png-employess-happy-employee-2282x1042-removebg.png"
                    alt="Hero image"></img>
            </div>

            <div className="w-50 p-5">
                <h1>ToGetheR We GrOw</h1>
                <h3> Manage Smarter, Not Harder!</h3>
            </div>
        </div>

        <div className="circle one"></div>
        <div className="circle two"></div>
    </div>
  )
}

export default Hero