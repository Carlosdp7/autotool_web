import React from 'react';
//Components
import { scroller as scroll } from 'react-scroll'
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Section = styled.section`
  height:auto;
  padding: 5rem 0;
  position: relative;
  background-image: url('/who-we-are-background-1.jpg');
  background-size: cover; 
  background-position: top;
  z-index:0;

  &::after {
    position: absolute;
    top: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(24, 24, 24, 0.79);
    z-index: 1;
  }

  @media (min-width: 992px) {
    height:100vh;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.6rem;
  margin-bottom:1.5rem;
  text-transform: uppercase;

  @media(min-width: 476px){
    font-size: 3rem;
  }

  @media(min-width: 576px){
    font-size: 3.6rem;
    margin-bottom:2rem;
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
  margin-bottom:3rem;

  @media(min-width: 576px){
    font-size: 1.2rem;
  }

  @media(min-width: 992px){
    margin-bottom:8rem;
  }

  @media(min-width: 1400px){
    font-size: 1.5rem;
  }
`;

const Image = styled.img`
  width: 80%;

  @media(min-width: 576px){
    width: 90%;
  }

  @media(min-width: 992px){
    width: auto;
  }
`;

const WhoWeAreSectionOne = () => {
  return (
    <Section>
      <Container className="h-100" fluid css={css`position:relative; z-index:2;`}>
        <Row className="h-100 align-items-center justify-content-center">
          <Col xs={11} md={8} xl={6} xxl={5}>
            <Heading1 className="text-center">Quienes <span css={css`border-bottom: 3px solid #1352FF;`}>Somos</span></Heading1>
            <Subtitle className="text-center">Empresa automotríz encargada de vender productos y servicios al mejor precio.</Subtitle>
            <div className="w-100 d-flex justify-content-center text-center">
              <div
                role="button"
                tabIndex={0}
                aria-labelledby="scroll down button"
                css={css`cursor: pointer;`}
                onKeyDown={() => {
                  scroll.scrollTo('chatWithUs', {
                    duration: 1000,
                    delay: 100,
                  })
                }}
                onClick={() => {
                  scroll.scrollTo('chatWithUs', {
                    duration: 1000,
                    delay: 100,
                  })
                }}>
                <Image src="/arrow-down.svg" alt="icono de flecha para abajo" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default WhoWeAreSectionOne;