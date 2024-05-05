import React from 'react'
import "../App";
import { Link } from 'react-router-dom';
// import telephone from "../images/telephone.png"


export default function Header() {
  return (
    <div className='header'>
       <div className='head'>
       <p> <img className='img' src="./images/telephone.png" alt='call image'/>
      </p>
      
      
      <Link to="/"> <p>Homepage  </p></Link> 
            <p>Products  </p>
            <p>Menu  </p>
            <p> <img className='img1' src="../images/lama.png" alt='call image'/></p>
            <p>Events  </p>
            <p>Blog  </p>
            <p>Contact  </p>
            <div>
            <p> <img className='img1' src="../images/dust.png" alt='call image'/></p>
            </div>
       </div>

    </div>
  )
}
