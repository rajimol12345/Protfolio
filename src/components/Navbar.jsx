import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import myImage from "./img/logo.avif";
const Navbar = () => {
  return (
    <div class="bg">
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={myImage} alt="My Image" class="rounded-circle" height="50px"width="50px" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"> <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link></a>
        <a class="nav-link" href="#"> <Link style={{textDecoration:'none',color:'white'}} to={'/About'}>About</Link></a>
        <a class="nav-link" href="#"> <Link style={{textDecoration:'none',color:'white'}} to={'/Education'}>Education</Link></a>
        <a class="nav-link" href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/Projects'}>Projects</Link></a>
        <a class="nav-link" href="#"><Link style={{textDecoration:'none',color:'white'}} to={'/Skills'}>Skills</Link></a>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar