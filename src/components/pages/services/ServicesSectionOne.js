import React from 'react';
//Components
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Section = styled.section`
  height:100vh;
  position: relative;
  background-image: url('/services-background-1.jpg');
  background-size: cover; 
  background-position: -38px 100%;
  background-repeat: no-repeat;
  z-index:0;

  @media (max-width: 1200px) {
    height:auto;
  }
`;

const Heading1 = styled.h1`
  font-size: 3rem;
  margin: 9rem 0 5rem 2.2rem; 
  line-height: 1.2;
  background: -webkit-linear-gradient(#1352FF, #5180FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1200px) {
    margin-top:8rem;
  }

  @media (max-width: 992px) {
    margin-top:3rem;
  }

  &::after {
    position: absolute;
    left: 0;
    margin-top: 1rem;
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #1352FF;
  }
`;

const Heading2 = styled.h2`
  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif !important;
  text-transform: uppercase;
  font-weight: 400 !important;
  text-align: center;
  margin-top: 1.2rem;
`;

const ServicesSectionOne = () => {
  return (
    <Section>
      <Container className="h-100" css={css`position:relative; z-index:2;`} fluid>
        <Row className="h-100 justify-content-end">
          <Col lg={6} css={css`background-color:rgba(24, 24, 24, 0.79);position:relative;`}>
            <Heading1>Nuestros <br /> Servicios</Heading1>

            <Row className="justify-content-center">
              <Col lg={5} className="mb-5">
                <div className="text-center" css={css`height:70px;`}>
                  <img src="/services-icon-1.svg" alt="icono de venta de equipos" css={css`height:100%;`} />
                </div>
                <Heading2>Venta de Equipos</Heading2>
              </Col>
              <Col lg={5} className="mb-5">
                <div className="text-center" css={css`height:70px;`}>
                  <img src="/services-icon-2.svg" alt="icono de venta de herramientas" css={css`height:100%;`} />
                </div>
                <Heading2>Herramientas</Heading2>
              </Col>
              <Col lg={5} className="mb-5 mb-lg-0">
                <div className="text-center" css={css`height:70px;`}>
                  <img src="/services-icon-3.svg" alt="icono de venta de consumibles" css={css`height:100%;`} />
                </div>
                <Heading2>Consumibles</Heading2>
              </Col>
              <Col lg={5} className="mb-5 mb-lg-0">
                <div className="text-center" css={css`height:70px;`}>
                  <img src="/services-icon-4.svg" alt="icono de venta de repuestos automotriz" css={css`height:100%;`} />
                </div>
                <Heading2>Respuestos <br /> Automotriz</Heading2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default ServicesSectionOne;