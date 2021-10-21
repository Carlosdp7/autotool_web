import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import HomerHero from "../components/pages/home/HomeHero"
import HomeSectionTwo from "../components/pages/home/HomeSectionTwo"
import HomeSectionThree from "../components/pages/home/HomeSectionThree"
import HomeSectionFour from "../components/pages/home/HomeSectionFour"

// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "frontpage" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `

export default function IndexPage({ data }) {
  return (
    <Layout>
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
      <HomerHero />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
    </Layout>
  )
}
