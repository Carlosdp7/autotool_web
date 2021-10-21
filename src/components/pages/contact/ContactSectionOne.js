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
  background-image: url('/contact-background-1.jpg');
  background-size: cover; 
  background-position: top;
  z-index:0;

  &::before {
    position: absolute;
    top: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(24, 24, 24, 0.79);
    z-index:1;
  }

  @media (min-width: 1200px) {
    height:100vh;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.6rem;
  text-transform: uppercase;
  margin-top:3rem;

  @media(min-width: 476px){
    font-size: 3rem;
  }

  @media(min-width: 576px){
    font-size: 3.6rem;
  }

  @media(min-width: 992px){
    margin-top:8rem;
  }

  @media (min-width: 1200px) {
    margin-top:6rem;
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
  background-color: rgba(255, 255, 255, 0.9);
  border-radius:30px;
  padding-top: 4rem; 
  padding-bottom:4rem;
`;

const LinkTo = styled.a`
  font-size: 1.2rem;

  @media(min-width: 576px){
    font-size: 1.6rem;
  }
`;

const Text = styled.p`
  color: #000;
  font-weight: 600;
  margin: 2rem 0 !important;
  font-size: 1.1rem;

  @media(min-width: 576px){
    font-size: 1.5rem;
  }
`;

const ContactSectionOne = () => {
  return (
    <Section>
      <Container className="h-100" css={css`position:relative; z-index:2;`}>
        <Row className="h-100 align-items-center justify-content-center">
          <Col lg={12}>
            <Row>
              <Col lg={12}>
                <Heading1 className="text-center mb-5">Contáctanos</Heading1>
              </Col>
              <Col lg={6} xl={4} className="mb-5">
                <Card className="h-100 text-center">
                  <div>
                    <img src="/email-card-icon-black.svg" alt="icono carta de email negro" />
                  </div>
                  <Text>autotool.co@gmail.com</Text>
                  <LinkTo href="#">enviar email</LinkTo>
                </Card>
              </Col>
              <Col lg={6} xl={4} className="mb-5">
                <Card className="h-100 text-center">
                  <div>
                    <img src="/whatsapp-icon-black.svg" alt="icono whatsapp negro" />
                  </div>
                  <Text>+57 324 289 2433</Text>
                  <LinkTo href="#">enviar mensaje</LinkTo>
                </Card>
              </Col>
              <Col lg={6} xl={4} className="mb-5">
                <Card className="h-100 text-center">
                  <div>
                    <img src="/instagram-icon-black.svg" alt="icono instagram negro" />
                  </div>
                  <Text>@autotool.co</Text>
                  <LinkTo href="#">seguir</LinkTo>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default ContactSectionOne;