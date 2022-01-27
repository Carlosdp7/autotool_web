import * as React from "react"
//Components
import { Toast } from "./toast"
import { Link } from "gatsby"
//Bootrstrap
import { Container, Navbar, Nav } from 'react-bootstrap';
//CSS
import { css } from "@emotion/react";
import styled from '@emotion/styled';
//Context
import { StoreContext } from "../context/store-context"
//Images

const HeaderStyles = styled.header`
  position: ${props => props.navBg ? 'static' : 'absolute'} ;
  width:100%;

  @media (max-width: 991px){
    position:static;
  }
`;

const NavItem = styled(Link)`
  font-family: 'Urbanist' !important;
  font-weight: 700 !important;
  color:#fff;
  margin-right: 4.5rem;
  text-decoration: none;
  font-size: 18px;

  &:nth-of-type(5){
    margin-right: 2rem;
  }
  
  &:hover {
    text-decoration:none;
    color:#fff;
    opacity: .8;
  }

  @media (max-width: 1999px){
    margin-right: 2rem;
  }

  @media (max-width: 991px){
    margin-right: 0rem;
    margin-bottom: 1rem;
    text-align: center;

    &:nth-of-type(1) {
      margin-top: 1rem;
    }

    &:nth-of-type(5){
      margin-right: 0rem;
    }

    &:hover {
      text-decoration:none;
      color:#fff;
    }
  }
`;

const QuantityText = styled.p`
  position:absolute;
  color:#fff;
  top:0; 
  right:6px;
  font-size:.9rem;

  @media(max-width: 991px){
  right:48%;
  }
  @media(max-width: 767px){
  right:47.5%;
  }
  @media(max-width: 475px){
  right:46.6%;
  }
`;

export function Header({ navBg }) {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <React.Fragment>
      <HeaderStyles navBg={navBg} className="py-4" css={css`z-index:3;background-color: ${navBg ? '#000' : 'none'};`}>
        <Navbar expand="lg" variant="dark">
          <Container>
            <Link to="/" className="navbar-brand">
              <img src="/autotool-white-logo.svg" alt="auto tool logo" />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavItem to="/">Inicio</NavItem>
                <NavItem to="/contacto/">Contacto</NavItem>
                <NavItem to="/nosotros/">Nosotros</NavItem>
                <NavItem to="/productos?s=RELEVANCE">Productos</NavItem>
                <NavItem to="/servicios/">Servicios</NavItem>
                <Link to="/carrito-compras" aria-label={`Shopping Cart with ${quantity} items`} css={css`position:relative;`}>
                  <div className="text-center">
                    <img src="/shipping-cart.svg" alt="carrito de compras" />
                  </div>

                  <QuantityText>{quantity > 0 ? quantity : 0}</QuantityText>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HeaderStyles>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Editando..."
        ) : (
          <>
            Agregado correctamente{" "}

          </>
        )}
      </Toast>
    </React.Fragment>
  )
}
