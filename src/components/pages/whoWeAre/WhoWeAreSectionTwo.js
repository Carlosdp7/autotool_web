import React from 'react';
//Components
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Section = styled.section`
  height:auto;
  position: relative;
  background: #fff;
  z-index:0;
  padding: 5rem 0;

  @media (min-width: 992px) {
    height:100vh;
    padding: 0;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.6rem;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 2.6rem;

  @media(min-width: 476px){
    font-size: 3rem;
  }

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

const Paragraph = styled.p`
  font-size: 1rem;
  color: #000000;
  text-justify: justify ;
  @media(min-width: 576px){
    font-size: 1.2rem;
  }

  @media(min-width: 1400px){
    font-size: 1.5rem;
  }

`;

const ImageContainer = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index:1000;
    width: 100%;
    height:100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const WhoWeAreSectionTwo = () => {
  return (
    <Section name="chatWithUs" id="chatWithUs">
      <Container className="h-100 px-0 d-none d-lg-block" fluid css={css`position:relative; z-index:2;`}>
        <Row className="h-100 gx-0">
          <Col lg={{ span: 5, offset: 1 }} css={css`padding-top:10rem;`}>
            <div css={css`margin-left:-10px;`}>
              <Heading1>Auto tool.</Heading1>
              <Paragraph>Es una empresa de distribución de servicios, herramientas y repuestos para el sector automotriz, cuyo principal objetivo es facilitar a nuestros clientes alternativas confiables considerando rentabilidad, calidad, alta seguridad y productos de fàcil manejo con soluciones y asesoria innovadoras.</Paragraph>
            </div>
          </Col>
          <Col lg={6} className="h-100">
            <ImageContainer>
              <img src="/who-we-are-background-2.jpg" alt="fondo de pantalla de inicio 2" css={css`position: relative;width:100%;height:100vh;object-fit: cover; object-position: 100% 10%;`} />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
      <Container className="d-block d-lg-none">
        <Row>
          <Col xs={12}>
            <Heading1>Auto tool.</Heading1>
            <Paragraph>es una empresa de distribución de servicios, herramientas y repuestos para el sector automotriz, cuyo principal objetivo es facilitar a nuestros clientes alternativas confiables considerando rentabilidad, calidad, alta seguridad y productos de fàcil manejo con soluciones y asesoria innovadoras.</Paragraph>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default WhoWeAreSectionTwo;