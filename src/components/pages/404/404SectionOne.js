import React from 'react';
//Components
import { Link } from 'gatsby';
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Section = styled.section`
padding:10rem 0;
  background-color: #fff;
`;

const Heading1 = styled.h1`
  font-size: 4.5rem;
  text-transform: uppercase;
  color:#000;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 556px) {
    font-size: 2.5rem;
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

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="mb-3">
              <img src="/not-found-icon-1.svg" alt="icono not found" />
            </div>
            <Heading1>404 not found</Heading1>
            <Text className="mb-4">No encontramos la página que buscas</Text>
            <LinkTo to="/">Volver a inicio</LinkTo>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default NotFound;