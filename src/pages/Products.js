import React from 'react'
import { useEffect, useState } from 'react'
import { addItem } from '../redux/action';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Products() {
  const [data, setData] = useState([]);
  const dispatch =useDispatch();

  const addProduct=(item)=>{
    dispatch(addItem(item))
  }

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
        <div className='ml-3 mr-3 my-3 py-3'>
          <div className='row'>
            <div className='col-12 mb-4'>
              <h2 className='display-4 text-center'>Product Collection's</h2>
            </div>
          </div>
          <div className='row justify-content-center'>
            <>
              {data && data.map((item) => {
                return (
                  <div key={item.id} className='col-md-3 col-sm-6 col-xs-6 mb-3'>
                    <div className='card text-center h-100'>
                      <img
                        className='card-img-top p-2'
                        src={item.image}
                        alt='card_image'
                        height={380}
                      />
                      <div className='card-body'>
                        <h5 className="card-title">{item.title.substring(0, 15)}....</h5>
                        <p className="card-text">{item.description.substring(0, 50)}....</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">₹ {item.price}</li>
                      </ul>
                      <div className="card-body">

                        <Link to={`/product/${item.id}`} className="btn btn-outline-secondary m-2">Buy Now</Link>
                        <button onClick={() => addProduct(item)} className="btn btn-outline-secondary m-2">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}

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