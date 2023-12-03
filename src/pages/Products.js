import React from 'react'
import { useEffect, useState } from 'react'

function Products() {
  const [data, setData] = useState([]);


  const getProductdata = async () => {
    return await fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    // fetch data of products
    getProductdata()
  }, []);


  const ShowProducts = () => {
    return (
      <>
        <div className='container my-3 py-3'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='display-4 text-center mb-3'>Product Collection's</h2>
            </div>
          </div>
          <div className='row justify-content-center'>
            <>
              <div className='col-md-3 col-sm-6 col-12 mb-3'>
                <div className='card text-center h-100'>
                  <img
                    className='card-img-top p-3'
                    src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                    alt='card_image'
                    height={280}
                  />

                  <div className='card-body'>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text content.</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="btn btn-outline-secondary card-link">Buy Now link</a>
                    <a href="#" class="btn btn-outline-secondary card-link">Add to cart</a>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </>
    )
  }


  return (
    // <div>Products</div>
    <ShowProducts />
  )
}

export default Products