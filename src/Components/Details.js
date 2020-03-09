import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const{id, name, images, description } = value.detailProduct;
          console.log(name, description, images);
          return (
            <div id="detail" class="ibm-grid-container">
              <div className="row">
                <div className="col-10 mx-auto text-center my-2">
                  <h1>{name}</h1>
                </div>
              </div>
              <div className="row">
                <div className= "column">
                  <div id="imgDetail">
                    <img src={images[0].url} alt="product"/>
                  </div>
                </div>
                <div className="col-5 col-md-6 text-left">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>  
    )
  }
}
