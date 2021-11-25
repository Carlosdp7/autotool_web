import React from 'react';
//Components
import { Link } from 'gatsby';
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';

const Section = styled.section`
  padding: 5rem 0;
  background-color: #181818;
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

const TextAboveTitle = styled.p`
  font-size: 1rem;

  @media(min-width: 576px){
    font-size: 1.2rem;
  }

  @media(min-width: 1400px){
    font-size: 1.5rem;
  }
`;

const PrimaryText = styled.p`
  line-height: 1.8;
  font-size: 1rem;

  @media(min-width: 576px){
    font-size: 1.2rem;
  }

  @media(min-width: 1400px){
    font-size: 1.7rem;
  }
`;

const LinkTo = styled(Link)`
  text-decoration:none;
  font-size: 1rem;

  @media(min-width: 576px){
    font-size: 1.2rem;
  }

  @media(min-width: 1400px){
    font-size: 1.5rem;
  }
`;

const HomeSectionTwo = () => {
  return (
    <Section>
      <Container>
        <Row className="align-items-center gx-0 gx-lg-5">
          <Col lg={6}>
            <TextAboveTitle>Quienes Somos</TextAboveTitle>
            <Heading2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading2>
            <LinkTo to="/nosotros/">Leer más <span className="ms-4">&gt;</span></LinkTo>
          </Col>
          <Col lg={6}>
            <PrimaryText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</PrimaryText>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HomeSectionTwo;