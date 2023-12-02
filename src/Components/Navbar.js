import React from 'react'

function Navbar() {
    return (
        <nav className='navbar sticky-top navbar-expand-lg bg-light py-2'>
            <div className='container'>
              <a href='/' className='navbar-brand fw-bold fs-2 px-2'>E-Shop </a>
              <button className='navbar-toggler mx-2' type="button" data-toggle="collapse" data-target="#navbarcontent" aria-controls='navbarcontent' aria-expanded="false" aria-label='Toggle Navbar'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div className='collapse navbar-collapse' id="navbarcontent">
                <ul className='navbar-nav m-auto my-2 text-center'>
                  <li className='nav-item'>
                    <a href='/' className='nav-link'>Home</a>
                  </li>
                  <li className='nav-item'>
                    <a href='/product' className='nav-link'>Products</a>
                  </li>
                </ul>
                <div className='buttons text-center'>
                  <a href='/login' className='btn btn-outline-dark m-2'><i className='fa fa-sign-in mr-1'></i>Login</a>
                  <a href='/cart' className='btn btn-outline-dark m-2'><i className='fa fa-cart-shopping mr-1'></i>Cart [0] </a>
                </div>
              </div>
            </div>
        </nav>
    )
}

export default Navbar