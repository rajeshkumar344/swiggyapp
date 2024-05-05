import React from 'react'
import App from '../App'

export default function Footer() {
  return (
    <div className='mycontainer'>
        <div className='spoon'>
            <img className='spoon1' src='../images/spoon.png' alt=''/>
        </div>
        <div className='spoondesc'>
          <div className='mycard'>
              <h2 className='motto'>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
         </div>
        <div className='mycard'>
          <h1 className='title'>FIND OUR RESTAURANTS</h1>
          <p className='text'>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className='text'>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className='text'>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className='text'>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className='mycard'>
          <h1 className='title'>WORKING HOURS</h1>
          <p className='text'>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className='text'>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>



        </div>


    </div>
  )
}
