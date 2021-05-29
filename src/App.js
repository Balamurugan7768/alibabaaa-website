import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ProductsContextProvider from './Global/ProductsContext';
import Products from './components/Products';
import Cart from './components/Cart';
import Notfound from './components/Notfound';



function App() {
  return (
  <div className="app">
 <ProductsContextProvider>
        <Router>
        <Navbar/>
        
       
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Notfound}/>
          
        </Switch>
        <Footer/>
      </Router>
      
      
       </ProductsContextProvider>
  </div>
  )
}

export default App;
