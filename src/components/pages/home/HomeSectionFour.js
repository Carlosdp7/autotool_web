import React from 'react';
//Components
import { Link } from 'gatsby';
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Section = styled.section`
  height:100vh;

  @media (max-width: 992px) {
    height:auto;
  }
`;

const Heading1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;

  @media(min-width: 576px){
    font-size: 3.6rem;
    margin-bottom:5rem;
  }

  @media(min-width: 1250px){
    font-size: 4rem;
  }

  @media(min-width: 1400px){
    font-size: 4.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;

  @media(min-width: 476px){
    font-size: 1.8rem;
  }

  @media(min-width: 576px){
    font-size: 2.2rem;
  }

  @media(min-width: 992px){
    font-size: 1.7rem;
  }

  @media(min-width: 1100px){
    font-size: 2rem;
  }

  @media(min-width: 1250px){
    font-size: 2.2rem;
  }
`;

const LinkTo = styled.a`
  font-size: 1.2rem;

  @media(min-width: 576px){
    font-size: 1.6rem;
  }
`;

const HomeSectionFour = () => {
  return (
    <Section>
      <Container className="h-100 px-0 d-none d-lg-block px-0" fluid>
        <Row className="gx-0">
          <Col lg={{ span: 5, offset: 1 }} className="py-5">
            <Heading1 css={css`margin-bottom:5rem;`}>Contáctanos</Heading1>
            <div className="w-100 d-flex mb-5">
              <div className="me-4">
                <img src="/email-card-icon.svg" alt="icono carta de email" />
              </div>
              <div css={css`margin-top: -10px;`}>
                <Text className="mb-1">autotool.co@gmail.com</Text>
                <LinkTo href="mailto:autotool.co@gmail.com">enviar email</LinkTo>
              </div>
            </div>
            <div className="w-100 d-flex mb-5">
              <div className="me-4">
                <img src="/whatsapp-icon.svg" alt="icono whatsapp" />
              </div>
              <div>
                <Text className="mb-1">+57 324 289 2433</Text>
                <LinkTo href="https://wa.me/573242892433" target="_blank" rel="noopener noreferrer">enviar mensaje</LinkTo>
              </div>
            </div>
            <div className="w-100 d-flex mb-5">
              <div className="me-4">
                <img src="/instagram-icon.svg" alt="icono instagram" />
              </div>
              <div css={css`margin-top: -10px;`}>
                <Text className="mb-1">@autotool.co</Text>
                <LinkTo href="https://www.instagram.com/autotool.co" target="_blank" rel="noopener noreferrer">seguir</LinkTo>
              </div>
            </div>
          </Col>
          <Col lg={6} className="h-100">
            <div>
              <img src="/home-background-2.jpg" alt="fondo de pantalla de inicio 2" css={css`width:100%;height:100vh;object-fit: cover; object-position: 100% 10%;`} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-block d-lg-none">
        <Row>
          <Col lg={12} className="pb-5">
            <Heading1>Contáctanos</Heading1>
            <div className="w-100 d-flex mb-5">
              <div className="me-4">
                <img src="/email-card-icon.svg" alt="icono carta de email" />
              </div>
              <div css={css`margin-top: -10px;`}>
                <Text className="mb-1">autotool.co@gmail.com</Text>
                <LinkTo href="#">enviar email</LinkTo>
              </div>
            </div>
            <div className="w-100 d-flex mb-5">
              <div className="me-4">
                <img src="/whatsapp-icon.svg" alt="icono whatsapp" />
              </div>
              <div>
                <Text className="mb-1">+57 324 289 2433</Text>
                <LinkTo href="#">enviar mensaje</LinkTo>
              </div>
            </div>
            <div className="w-100 d-flex mb-5">
              <div className="me-4">
                <img src="/instagram-icon.svg" alt="icono instagram" />
              </div>
              <div css={css`margin-top: -10px;`}>
                <Text className="mb-1">@autotool.co</Text>
                <LinkTo href="#">seguir</LinkTo>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HomeSectionFour;