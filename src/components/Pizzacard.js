import React from 'react'
import "../App";
import { Link, useNavigate } from 'react-router-dom';

export default function Pizzacard() {
  const navigate = useNavigate();
 
  return (
    <div className='card'>
      <Link to="/details"> <img src='../images/pizza.png'alt='' style={{width:250,height:250}} /></Link> 
        <h1 className='ptitle'>FIORI DI ZUCCA</h1>
      <span className='pprize'>$19.90</span>
      <p className='pdesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}
