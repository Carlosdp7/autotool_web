import * as React from "react"
import { Layout } from "../components/layout"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"
import {
  table,
  totals,
  grandTotal,
  summary,
  checkoutButton,
  collapseColumn,
  labelColumn,
  imageHeader,
  productHeader,
  quantity
} from "./cart.module.css"
import EmptyCart from "../components/pages/cart/EmptyCart"
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';

const Section = styled.section`
  padding:3rem 0;
  background-color: #fff;
  color:#181818 !important;

  @media(min-width: 576px){
    padding:5rem 0;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom:2.5rem;
  color: #181818;

  @media(min-width: 576px){
    margin-bottom:3.5rem;
  }

  @media(min-width: 992px){
    margin-bottom:4.5rem;
  }
`;

export default function CartPage() {
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <Layout headerNavBg={true}>
      <Section>
        <Container>
          {emptyCart ? (
            <EmptyCart />
          ) : (
            <>

              <Row>
                <Col lg={12}>
                  <Heading1>Tu Carrito</Heading1>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <table className={table}>
                    <thead>
                      <tr>
                        <th className={imageHeader}>Imagen</th>
                        <th className={productHeader}>Producto</th>
                        <th className={collapseColumn}>Precio</th>
                        <th className={quantity}>Cantidad</th>
                        <th className={[totals, collapseColumn].join(" ")}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {checkout.lineItems.map((item, index) => (
                        <LineItem item={item} key={item.id} itemsLength={checkout.lineItems.length} index={index} />
                      ))}

                      <tr className={summary}>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={labelColumn}>Subtotal</td>
                        <td className={totals}>
                          {formatPrice(
                            checkout.subtotalPriceV2.currencyCode,
                            checkout.subtotalPriceV2.amount
                          )}
                        </td>
                      </tr>
                      <tr className={summary}>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={labelColumn}>Impuestos</td>
                        <td className={totals}>
                          {formatPrice(
                            checkout.totalTaxV2.currencyCode,
                            checkout.totalTaxV2.amount
                          )}
                        </td>
                      </tr>
                      <tr className={summary}>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={labelColumn}>Envío</td>
                        <td className={totals}>Calculado en el checkout</td>
                      </tr>
                      <tr className={grandTotal}>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={collapseColumn}></td>
                        <td className={labelColumn}>Total</td>
                        <td className={totals}>
                          {formatPrice(
                            checkout.totalPriceV2.currencyCode,
                            checkout.totalPriceV2.amount
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
              <Row className="pt-5 justify-content-end">
                <Col md={5} lg={4}>
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className={checkoutButton}
                  >
                    Checkout
                  </button>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Section>
    </Layout>
  )
}
