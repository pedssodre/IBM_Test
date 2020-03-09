import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
  render() {
    const{id, name, images} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-2">
        <div className="card">
          <ProductConsumer>
            {(value) => (
            <div className="img-container"
             onClick={() => {
                value.handleDetail(id)
              }}
            >
            <Link to="/details">
              <img src={images[0].url} alt="product" className="card-img-top"/>
            </Link>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <Link to="/details">
              <p>View</p>
              </Link>
            </div>
            </div>
            )}
          
          </ProductConsumer>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`
  width: 18rem;
`
