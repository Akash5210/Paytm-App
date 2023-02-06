import React from 'react';
import '../Styles/Navbar.css'

//images
import navBrandLogo from '../Images/paytmLink.PNG';
import signinIcon from '../Images/logoutImg.svg';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg my-2">
  <div class="container-fluid mx-5">
    <a class="navbar-brand" href="#">
        <img src={navBrandLogo} alt="Logo"  class="d-inline-block align-text-top" />  
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ms-5">
          <a class="nav-link mx-2 navLink" href="#">Paytm for Consumer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 navLink" href="#">Paytm For Business</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 navLink " href="#">Investor Relations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 navLink" href='#'>Company</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 navLink" href='#'>Career</a>
        </li>
      </ul>
    </div>
    <button id="signIn" className='ps-3 pe-1 py-1 border border-0 rounded-pill'>
      Sign In <img src={signinIcon} />
    </button>
  </div>
</nav>
  )
}
