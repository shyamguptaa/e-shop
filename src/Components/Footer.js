import React from 'react'

function Footer() {
  return (
    <footer className='mb-0'>
      <div className='d-flex align-items-center pb-5 justify-center row'>
        <div className='col-md-4 col-lg-4 text-start ml-5'>
          <p className='mb-3 mb-md-0 '>
            <a href='/' className='text-decoration-none m-2 text-dark'>E-Shop By Shyam</a>
            <a href='https://github.com/shyamguptaa' className='text-decoration-none text-dark'><i className="fa-brands fa-github"></i>Github</a>
          </p>
        </div>
        <div className='col-md-2 col-lg-2 text-center'>
          <a href='/cart' className='text-decoration-none m-2 text-dark'><i className='fa fa-cart-shopping mr-1'></i>Cart [0] </a>
        </div>
        <div className='col-md-5 col-lg-5 text-end ' >
          <a href='/' className='text-decoration-none m-2 text-dark'>Home</a>
          <a href='/product' className='text-decoration-none m-2 text-dark'>Product</a>
          <a href='/about' className='text-decoration-none m-2 text-dark'>About US</a>
          <a href='/contact' className='text-decoration-none m-2 text-dark'>Contact</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer