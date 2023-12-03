import React from 'react'
import { addItem } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import Products from './Products';


function Home() {
  const disptach = useDispatch();
  const state = useSelector((state) => state.handlecart)

  // useEffect(() => {
  //   disptach(addItem("dsfdf"))
  // }, [])

  return (
    <div>
      <Products/>
    </div>
  )
}

export default Home