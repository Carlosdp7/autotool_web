import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import { Seo } from "../../../components/seo"
import { MoreButton } from "../../../components/more-button"
//Bootrstrap
import { Container, Row, Col } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';

const Section = styled.section`
  padding:4rem 0 6rem 0;
  background-color: #fff;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: 700 !important;
  color:#181818;
  margin-bottom: 2rem;

  @media(min-width: 576px){
    font-size: 2.5rem;
  }
`;

export default function ProductTypeIndex({
  data: { products },
  pageContext: { productType },
}) {
  return (
    <Layout headerNavBg={true}>
      <Seo title={`Categoría: ${productType}`} />
      <Section>
        <Container>
          <Row>
            <Col lg={12}>
              <Heading1>{productType}</Heading1>
              <ProductListing products={products.nodes} />
              <MoreButton to="/productos">
                Más Productos
              </MoreButton>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: createdAt, order: ASC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
