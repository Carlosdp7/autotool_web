import React from 'react';
//Components
import { Link } from 'gatsby';
//Bootrstrap
import { Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Heading1 = styled.h1`
  font-size: 3.5rem;
  color:#000;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 556px) {
    font-size: 1.5rem;
  }
`;

const LinkTo = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;

  @media (max-width: 556px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  color:#000;
  font-size:1.2rem;

  @media (max-width: 556px) {
    font-size: 1rem;
  }
`;

const EmptyCart = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={8} className="text-center">
        <div className="mb-3">
          <img src="/empty-cart-2.svg" alt="carrito vacío" />
        </div>
        <Heading1>Tu carrito se encuentra vacío</Heading1>
        <Text className="mb-4">Parece que no has encontrado algun producto aún. </Text>
        <LinkTo to="/search?s=BEST_SELLING">Mostrar el catalogo</LinkTo>
      </Col>
    </Row>
  );
}

export default EmptyCart;