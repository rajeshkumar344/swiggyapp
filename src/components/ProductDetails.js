import React from 'react'
import App from '../App'
import { Link } from 'react-router-dom'

export default function ProductDetails() {
    const [price, setPrice] =React.useState("$23.9")
  return (
    <div className='pmain'>
        <div>
            <img src='../images/pizza.png'alt=''/>
        </div>
        <div className='pdescript'>
            <div>
                <h1>CAMPAGNOLA </h1>
                <span className='pprice'> {price}</span>
                <p className='plorem'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius perspiciatis quod sunt esse incidunt itaque est, quas quasi dolore molestias, explicabo molestiae dolor excepturi.
                </p>
            </div>
            <div>
                <h3>choose the size  </h3>
                <div className='btnsize'>
                    <button onClick={()=>setPrice("$19.8")} className='btnp'>Small</button>
                    <button  onClick={()=>setPrice("$23.9")} className='btnp'>Medium</button>
                    <button  onClick={()=>setPrice("$44.8")} className='btnp'>Large </button>
                </div>
                <h4>Choose additional Ingredients </h4>
                <div className='ping'>
                <div>
                    <input type='checkbox'id='ing'/>
                    <label for="ing">Double Ingredients</label>
                </div>

                <div>
                    <input type='checkbox'id='ing'/>
                    <label for="ing">Extra Cheese</label>
                </div>

                <div>
                    <input type='checkbox'id='ing'/>
                    <label for="ing">Spicy Sauce</label>
                </div>

                <div>
                    <input type='checkbox'id='ing'/>
                    <label for="ing">Garlic Sauce</label>
                </div>
                </div>
                <div className='mqty'>
                    <input className='qty' type='number' defaultValue={1}/>
               <Link to="/addtocart"><button className='qtybtn'>Add To Cart</button> </Link>
                </div>

            </div>
        </div>

    </div>
  )
}
