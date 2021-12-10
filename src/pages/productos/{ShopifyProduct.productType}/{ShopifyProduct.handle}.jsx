import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import isEqual from "lodash.isequal"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { StoreContext } from "../../../context/store-context"
import { AddToCart } from "../../../components/add-to-cart"
import { NumericInput } from "../../../components/numeric-input"
import { formatPrice } from "../../../utils/format-price"
import { Seo } from "../../../components/seo"
import parse from "html-react-parser"
//Bootrstrap
import { Container, Row, Col, Carousel } from 'react-bootstrap';
//CSS
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ProductCard } from "../../../components/product-card"

const Section = styled.section`
  padding:4rem 0 6rem 0;
  background-color: #fff;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: 700 !important;
  color:#181818;

  @media(min-width: 576px){
    font-size: 2.5rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 700 !important;
  color:#181818;

  @media(min-width: 576px){
    font-size: 2.2rem;
  }
`;

const Heading3 = styled.h3`
  font-size: 1.9rem;
  font-weight: 700 !important;
  color:#181818;

  @media(min-width: 576px){
    font-size: 2.4rem;
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
  color:#181818;
  line-height: 1.8;

  @media(min-width: 576px){
    font-size: 1.3rem;
  }
`;

export default function Product({ data: { product, suggestions } }) {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    images,
    images: [firstImage],
  } = product
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, event) => {
    const value = event.target.value

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  )

  const hasVariants = variants.length > 1
  const hasImages = images.length > 0
  const hasMultiImages = images.length > 1

  return (
    <Layout headerNavBg={true}>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <Section>
        <Container>
          <Row className="gx-0 gx-lg-5">
            <Col lg={12} className="mb-5">
              <Heading1 className="mb-2">{title}</Heading1>
              <Heading2>{price}</Heading2>
            </Col>
            <Col lg={7}>
              <Carousel controls={hasMultiImages} indicators={hasMultiImages} interval={2000} variant="dark" >
                {hasImages ? (images.map((image, index) => (
                  <Carousel.Item className="border text-center" key={index}>
                    <GatsbyImage
                      objectFit="none"
                      loading={index === 0 ? "eager" : "lazy"}
                      alt={
                        image.altText
                          ? image.altText
                          : `Imagen del producto ${title} #${index + 1}`
                      }
                      image={image.gatsbyImageData}
                    />
                  </Carousel.Item>
                ))) : (
                  <Carousel.Item className="border text-center">
                    <div>
                      <img
                        alt={`Imagen por defecto de un producto`}
                        src="/"
                      />
                    </div>
                  </Carousel.Item>
                )}
              </Carousel>
            </Col>
            <Col lg={5} className="mt-5 mt-lg-0">
              <Heading3>Descripción</Heading3>
              <Description className="mt-3 mb-4">
                {parse(product.descriptionHtml)}
              </Description>
              <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              />

              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </Col>
          </Row>
          {suggestions.nodes.length !== 0 && (
            <Row css={css`padding-top:10rem;`}>
              <Col lg={12} className="mb-4">
                <Heading2 css={css`font-size:2.5rem;`}>Similar</Heading2>
              </Col>
              {suggestions.nodes.map((p, index) => (
                <Col xs="auto" sm={6} lg={4}>
                  <ProductCard
                    eager={index === 0}
                    product={p}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      descriptionHtml
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/productos/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 4
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`
