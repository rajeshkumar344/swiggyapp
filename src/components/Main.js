import React from 'react'
import "../App";
import { Link } from 'react-router-dom';

export default function Main() {
    const [index, setIndex] = React.useState(0)
    console.log("heyyy",index)
    const allImages = [
       "/images/pizza.png",
        "/images/size.png",
        "/images/spoon.png",
    ];
    function nextImage(direction){
        if(direction==="l"){
            setIndex(index!==0? index-1 :2)
        }
        if(direction==="r"){
            setIndex(index!==2? index+1 :0)
        }
       
    }
    
  return (
    <div className='body' >

        <div className='' >
           <button onClick={()=>nextImage("l")}
            className='btn'><img className='arrows' src='./images/lftarrw.png'/></button> 
            
        </div>

      {allImages.map((img, i)=>{
        return(
               
        <div className='container'  key={i} style={{transform :`translateX(${-100*index}vw)`}}>
        <Link to="/items" >  <img src={img} style={{width:250,height:250}}  layout="fill" objectFit="contain"/></Link> 
           
        </div>
          )
        })} 
    


        <div>
        <button className='btn' onClick={()=>nextImage("r")}><img className='arrows' src='./images/rgtarrw.png'/></button> 
        
         </div>        

    </div>
  )
}
