import React from 'react'
import Pizzacard from './Pizzacard'
import App from '../App'

export default function ProductList() {
  return (
    <div className='containers'>
       <h1 className='title'>THE BEST PIZZA IN TOWN</h1>   
      <p className='desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
            
        <div className='pizza'>
          <Pizzacard/>
          <Pizzacard/>
          <Pizzacard/>
          <Pizzacard/>
          <Pizzacard/>
          <Pizzacard/>
          <Pizzacard/>
          <Pizzacard/>
        </div>
      
    </div>
  )
}
