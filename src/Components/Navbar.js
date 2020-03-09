import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar-nav navbar-expand-sm px-sm-2">
          <Link to="/" className="nav-link ">
            E-commerce test
          </Link>
        
          <Link to="/cart" className="ml-auto nav-link">
            <ButtonContainer>
              <span className="mr-1">
                <i className="fas fa-shopping-cart"/>
              </span>
              cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
        <div className="ibm-rule ibm-alternate ibm-gray-30"><hr/></div>
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  .nav-link{
    color:var(--mainDark) !important;
  }
`