import React from 'react'
import App from '../App'
import { Link } from 'react-router-dom'

export default function Mycard() {
  return (
    <div className='mycontainers'>
        <div className='table'>
            <div className='table1'>
            <table className='mt'>
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
             
                <tr >
                    <td><img className='timg' src='../images/pizza.png'alt='pizza'/></td>
                    <td style={{color:'orangered'}}>CORALZO</td>
                    <td>Double Ingredient spicy sauce</td>
                    <td>$19.90</td>
                    <td>2</td>
                    <td className='tprice'>$39.80</td>
                </tr>
             
            </table>
          
            </div>
            <div className='tdata'>
                <h2>CART TOTAL</h2>
                <p>Subtotal : $79.60</p>
                <p>Discount : $0.00</p>
                <p>Total : $79.60</p>
               <Link to = "/order">  <button className='btn'>CHECKOUT NOW</button></Link> 
            </div>
        </div>
    </div>
  )
}
