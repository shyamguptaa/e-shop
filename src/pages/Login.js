import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='container py-3 my-3'>
      <h2 className='display-4 text-center'> Login </h2>

      {/* <hr></hr> */}
      <div className='row my-3'>
        <div className='col-md-4 col-lg-4 col-sm-8 mx-auto'>
          <form onSubmit={handlesubmit}>
            <div>
              <label  for="display-email">Enter Email</label>
              <input
              type='email'
              className='form-control'
              id='display-email'
              placeholder='name@domain.com'
              />
            </div>
            <div>
              <label  for="display-pass">Password</label>
              <input
              type='password'
              className='form-control'
              id='display-pass'
              placeholder='password'
              />
            </div>
            <div className='d-grid gap-2'>
              <button className='btn btn-primary my-2 mx-auto' type='submit' > Login </button> 
              <div><Link to="/"  className='my-2 mx-2 'type="button">Forget password</Link></div>
              <div><Link to="/register" className='my-2 mx-2 'type="button">Register</Link></div>
            </div>

          </form>

        </div>


      </div>
    </div>
  )
}

export default Login