import React from 'react'

function Register() {
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='container py-3 my-3'>
      <h2 className='display-4 text-center'> Register </h2>

      {/* <hr></hr> */}
      <div className='row my-3'>
        <div className='col-md-8 col-lg-5 col-sm-8 mx-auto'>
          <form onSubmit={handlesubmit}>
            <div>
              <label  htmlFor="display-name">Enter Name</label>
              <input
              type='text'
              className='form-control'
              id='display-name'
              placeholder='Full Name'
              />
            </div>
            <div>
              <label  htmlFor="display-email">Enter Email</label>
              <input
              type='email'
              className='form-control'
              id='display-email'
              placeholder='name@domain.com'
              />
            </div>
            <div>
              <label  htmlFor="display-pass">Password</label>
              <input
              type='password'
              className='form-control'
              id='display-pass'
              placeholder='password'
              />
            </div>
            <div>
              <label  htmlFor="display-conform-pass">Confirm Password</label>
              <input
              type='password'
              className='form-control'
              id='display-conform-pass'
              placeholder='password'
              />
            </div>
            <div className='d-grid gap-2'>
              <button className='btn btn-primary my-2 mx-auto' type='submit' > Register </button> 
            </div>

          </form>

        </div>


      </div>
    </div>
  )
}

export default Register