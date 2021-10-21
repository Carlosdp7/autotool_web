import * as React from "react"
//Components
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import { Toast } from "./toast"
import { Link } from "gatsby"
//Bootrstrap
import { Container, Navbar, Nav, ToastContainer } from 'react-bootstrap';
//CSS
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import {
  header,
  container,
  logo as logoCss,
  searchButton,
  nav,
} from "./header.module.css";
//Context
import { StoreContext } from "../context/store-context"
//Images
import Logo from "../icons/logo";

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
      {/* <div className={container}>
       <header className={header}>
         <Link to="/" className={logoCss}>
           <Logo />
        </Link>
         <Navigation className={nav} />
       <Link to="/search" className={searchButton}>
           <SearchIcon />
         </Link>
       <CartButton quantity={quantity} />
      </header>
       <Toast show={loading || didJustAddToCart}>
         {!didJustAddToCart ? (
           "Updating…"
         ) : (
       <>
             Added to cart{" "}
             <svg
               width="14"
               height="14"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                 fill="#fff"
               />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                 fill="#fff"
              />
               <path
                 d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                 fill="#fff"
               />
             </svg>
           </>
         )}
      </Toast>
     </div> */}
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
                <NavItem to="/contacto">Contacto</NavItem>
                <NavItem to="/nosotros">Nosotros</NavItem>
                <NavItem to="/search">Productos</NavItem>
                <NavItem to="/servicios">Servicios</NavItem>
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
