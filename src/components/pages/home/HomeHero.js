import React from 'react';
//Components
import { Link } from 'gatsby';
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Section = styled.section`
  height:auto;

  @media (min-width: 992px) {
    height:100vh;
  }
`;

const Heading1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;

  @media(min-width: 576px){
    font-size: 3.6rem;
  }

  @media(min-width: 1250px){
    font-size: 4rem;
  }

  @media(min-width: 1400px){
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;

  @media(min-width: 576px){
    font-size: 1.2rem;
  }

  @media(min-width: 1400px){
    font-size: 1.5rem;
  }
`;

const BlueButton = styled.button`
  padding: 1.2rem 2rem;
  font-family: 'Urbanist', sans-serif;
  font-weight: 700;
  font-size: 16px;
  background-color: #1352FF;
  border-radius: 40px;
  color: #fff;
  border:none;

  @media(min-width: 576px){
    font-size: 19px;
  }

  @media(min-width: 1400px){
    padding: 1.2rem 2.2rem;
  }
`;

const TransparentButton = styled.button`
  font-family: 'Urbanist', sans-serif;
  font-weight: 700;
  font-size: 16px;
  border-radius: 40px;
  color: #fff;
  border:1px solid #fff;
  background-color: transparent;
  padding: 1.2rem 2rem;

  @media(min-width: 576px){
    font-size: 19px;
  }

  @media(min-width: 1400px){
    padding: 1.2rem 4.1rem;
  }
`;

const HomerHero = () => {
  return (
    <Section>
      <Container className="h-100 px-0 d-none d-lg-block" fluid>
        <Row className="h-100 align-items-center gx-0">
          <Col lg={{ span: 5, offset: 1 }}>
            <div css={css`margin-left:-10px;`}>
              <Heading1>Lorem ipsum dolor sit amet</Heading1>
              <Subtitle className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Subtitle>
              <div>
                <Link to="/productos">
                  <BlueButton type="button" className="me-5">
                    Comprar ahora
                  </BlueButton>
                </Link>
                <Link to="/servicios/">
                  <TransparentButton>
                    Explorar
                  </TransparentButton>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6} className="h-100">
            <div>
              <img src="/home-background-1.jpg" alt="fondo de pantalla de inicio 1" css={css`width:100%;height:100vh;object-fit: cover; object-position: 100% 10%;`} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-block d-lg-none">
        <Row>
          <Col xs={12} className="pb-5">
            <Heading1>Lorem ipsum dolor sit amet</Heading1>
            <Subtitle className="mb-4 mb-sm-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Subtitle>
            <div>
              <Link to="/productos">
                <BlueButton type="button" className="me-5 mb-3 mb-sm-0">
                  Comprar ahora
                </BlueButton>
              </Link>
              <TransparentButton>
                Explorar
              </TransparentButton>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HomerHero;