import * as React from "react"
//Components
import { Link } from "gatsby"
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import { css } from "@emotion/react";
import styled from '@emotion/styled';
//Context
//Images

const LinkTo = styled(Link)`
  font-size: 1.3rem;
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;

  &:hover {
    color: #fff;
    opacity: .8;
    text-decoration: none;
  }
`;

const BorderBottom = styled.span`
  border-bottom: 2px solid #1352FF;
  padding-bottom: .5rem;
`;

const BoldText = styled.p`
  color: #000000;
  font-weight: 800;
  font-family: 'Urbanist', sans-serif;
  font-size: 1.1rem;

  @media(min-width: 992px){
    font-size: 1.5rem;
  }
`;

export function Footer() {
  return (
    <footer>
      <section css={css`background-color: #181818;padding: 4rem 0rem;`}>
        <Container>
          <Row>
            <Col md={4} lg={6} className="mb-md-0 text-center text-md-start">
              <h4 className="mb-3" css={css`font-size:2.4rem;`}>Contáctanos</h4>
              {/* <p css={css`font-size:1.3rem;margin-bottom:1rem;`}>Calle 140 , Cedritos <br /> Bogota - Colombia </p> */}
              <p css={css`font-size:1.3rem;margin-bottom:1rem;`}>+57 324 289 2433</p>
              <p css={css`font-size:1.3rem;margin-bottom:1rem;`}>autotool.co@gmail.com</p>
            </Col>
            <Col md={4} lg={2} className="text-center text-lg-start">
              <h4 className="mb-4"><BorderBottom>Inicio</BorderBottom></h4>
              <LinkTo to="/servicios/">Servicios</LinkTo>
              <LinkTo to="/contacto/">Contacto</LinkTo>
            </Col>
            <Col md={4} lg={3} className="text-center text-lg-start">
              <h4 className="mb-4"><BorderBottom>Nosotros</BorderBottom></h4>
              <LinkTo to="/nosotros/">Nosotros</LinkTo>
              <LinkTo to="/politicas-privacidad/">Politicas de Privacidad</LinkTo>
              <LinkTo to="/terminos-condiciones/">Terminos y Condiciones</LinkTo>
            </Col>
          </Row>
        </Container>
      </section>
      <section css={css`background-color: #fff;`}>
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col xs={8} sm={8} lg={6} className="text-center text-sm-start mb-3 mb-sm-0">
              <Link to="/">
                <div>
                  <img src="/autotool-black-logo.svg" alt="autool logo negro" className="img-fluid" />
                </div>
              </Link>
            </Col>
            <Col xs={8} sm={4} lg={6}>
              <div className="w-100 h-100 d-flex align-items-center justify-content-center justify-content-sm-end">
                <BoldText className="mb-0">Bogotá - Colombia</BoldText>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  )
}
