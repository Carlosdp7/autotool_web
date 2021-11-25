import React from 'react';
//Components
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media(min-width: 576px){
    padding-top: 4rem;
    padding-bottom: 5rem;
  }

  @media (min-width: 992px){
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 3.5rem;

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

const Card = styled(Col)`
  width: 100%;
  background-color: #181818;
  border-radius:14px;
`;

const CardText = styled.p`
  font-size: 1rem;

  @media(min-width: 576px){
    font-size: 1.1rem;
  }
`;

const Heading3 = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;

  @media(min-width: 576px){
    font-size: 2.2rem;
  }
`;

const HomeSectionThree = () => {
  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <Heading2>Nuestros <br /> Servicios</Heading2>
          </Col>
          <Col lg={4} className="mb-3">
            <Card className="px-5" css={css`padding-top: 4rem; padding-bottom:4rem;`}>
              <img src="/herramientas-icon.svg" alt="icono de herramientas" />
              <Heading3>Herramientas</Heading3>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</CardText>
            </Card>
          </Col>
          <Col lg={4} className="mb-3">
            <Card className="px-5" css={css`padding-top: 4rem; padding-bottom:4rem;`}>
              <img src="/maquinas-icon.svg" alt="icono de máquinas" />
              <Heading3>Máquinas</Heading3>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</CardText>
            </Card>
          </Col>
          <Col lg={4} className="mb-3">
            <Card className="px-5" css={css`padding-top: 4rem; padding-bottom:4rem;`}>
              <img src="/repuestos-icon.svg" alt="icono de repuestos" />
              <Heading3>Repuestos</Heading3>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HomeSectionThree;