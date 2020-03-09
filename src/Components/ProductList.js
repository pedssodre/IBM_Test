import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import IBMlogo from '../ibmlogo.png';
import { ProductConsumer } from '../context';


export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="firstDiv">
          <img src={IBMlogo} alt="SideImg"/>
          <h2>E-commerce test</h2>
          <p>The easiest way to shop IBM merchandise items. Simply choose what you want and we'll work with vendors to have your order delivered as soon as possible.</p>
          <hr/>
        </div>
        <div className="py-5">
          <div className="container">
              <Title />
              
              <div className="row">
              <ProductConsumer>
                {value=>{
                  return value.storeProducts.map( product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
              </div>
          </div>
        </div>
      </React.Fragment>
      
    );
  }
}