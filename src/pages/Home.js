import React from 'react'
import { addItem } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';


function Home() {
  const disptach=useDispatch();
  const state=useSelector((state)=>state.handlecart)
  console.log(state,"state")
 useEffect(()=>{
  disptach(addItem("dsfdf"))
  
 },[])
 
  return (
    <div>Home</div>
  )
}

export default Home