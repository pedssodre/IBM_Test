import React, { Component } from 'react';
import { products } from './products.json';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    storeProducts: [],
    detailProduct: products
  };

  componentDidMount(){
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    products.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return{storeProducts: tempProducts }
    })
  }

  getItem = (id) => {
    const product = this.state.storeProducts.find(item => item.id === id);
    return product;
  }

  handleDetail = (id) =>{
    const product = this.getItem(id);
    this.setState(() =>{
      return{detailProduct:product}
    })
  }

  addToCart = () => {
    console.log('hello from add to cart');
  }

  render() {
    return (
      <ProductContext.Provider 
      value={{
        ...this.state, 
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
      }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
