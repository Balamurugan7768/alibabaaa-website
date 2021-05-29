import React, {createContext, useState} from "react";


import ring from "../assets/ring.jpg";
import iphone from "../assets/iphone.jpg";
import travelbag from "../assets/travelbag.jpg";
import shoe from "../assets/shoe.jpg";
import watch from "../assets/watch.jpg";
import perfume from "../assets/perfume.jpg";
import headphone from "../assets/headphone.jpg";
import dslr from "../assets/dslr.jpg";





export const ProductsContext = createContext();


const ProductsContextProvider = (props)=>{
   const [products]= useState([
   
      {id:1,name:'Ring',price:9000,image:ring,status:'hot'},
      {id:2,name:'Iphone',price:75000,image:iphone,status:'new'},
      {id:3,name:'Travelbag',price:1700,image:travelbag,status:'hot'},
      {id:4,name:'Shoe',price:1600,image:shoe,status:'hot'},
      {id:5,name:'Watch',price:2500,image:watch,status:'hot'},
      {id:6,name:'Perfume',price:580,image:perfume,status:'new'},
      {id:7,name:'Headphone',price:2000,image:headphone,status:'hot'},
      {id:8,name:'Dslr',price:46000,image:dslr,status:'hot'},
  ])

   return(

<ProductsContext.Provider value={{products:[...products]}}>
        {props.children}
</ProductsContext.Provider>


   )


}




export default ProductsContextProvider;