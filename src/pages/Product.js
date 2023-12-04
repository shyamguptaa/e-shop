import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addItem } from '../redux/action';

function Product() {
  const routedata=useParams();
  const dispatch=useDispatch();
  
  const [itemData,setItemData]=useState([]);


  const getProductDetailsByID=async ()=>{
    return await fetch(`https://fakestoreapi.com/products/${routedata?.id}`)
      .then((res) => res.json())
      .then((d) => setItemData(d))
  }
  useEffect(()=>{
    getProductDetailsByID()
  },[routedata])


  const addProduct=(item)=>{
    dispatch(addItem(item))
  }

  const ShowproductDetail=()=>{
    return(
      <>
      <div className='container my-5 py-3'>
        <div className='row'>
          <div className='col-md-6 py-3'>
            <img 
              className='img-fluid'
              src={itemData.image}
              alt={itemData.title}
              width="350px"
              height="350px"
            />
          </div>
          <div className='col-md-6 py-3'>
            <h1 className='display-5'>{itemData.title}</h1>
            <h4 className='text-muted fs-6 text-uppercase'>{itemData.category}</h4>
            <span className='lead'>⭐ {itemData.rating?.rate}</span>
            <br></br>
            <p className='display-5 lead'> ₹ {itemData.price}</p>
            <p className='lead fs-6 justify-center'>{itemData.description}</p>

            <div className='mb-4'>
              <button className='btn btn-outline-secondary mr-2' onClick={()=>addProduct(itemData)}>Add To cart</button>
              <a href="/cart" className='btn btn-outline-secondary m-3'>GoTo cart</a>
            </div>


          </div>

        </div>

      </div>
      </>
    )
  }
  return (
    <>
    <ShowproductDetail/>
    </>
  )
}

export default Product