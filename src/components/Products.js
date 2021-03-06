import React,{useContext} from 'react'
import  {ProductsContext} from '../Global/ProductsContext';
import Banner from './Banner';
const Products = ()=> {
    const {products} = useContext(ProductsContext);
    
    return (
        <div className="container">
            <Banner/>
        <div className="products" >
        {products.map((product) => (
            <div className="product" key={product.id}>
              
            <div className="product-image">
              <img src={product.image} alt="Not found"/>
              </div>
            
            <div className="product-details">
                <div className="product-name">
                 {product.name}
                </div>
               <div className="product-price">
               ₹{product.price}
               </div>
               
              
            </div>
            <div className="add-to-cart">
                add to cart</div>
                {product.status === 'new' ? <div className="new">New</div>: ''}
               {product.status === 'hot' ? <div className="hot">Hot</div>: ''}
            </div>
            
        ))}
        
        </div>
        </div>
    )
}

export default Products
