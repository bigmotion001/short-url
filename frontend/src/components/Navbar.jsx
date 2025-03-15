import React from 'react'

const Navbar = () => {
  return (
   
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="/" className="logo d-flex align-items-center me-auto">
      
         <img src="" alt=""/> 
        <h1 className="sitename">SHORT-URL</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          
         
          <li><a href="#pricing">Pricing</a></li>
          
          
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="btn-getstarted" href="#about">Get Started</a>

    </div>
  </header>
  )
}

export default Navbar