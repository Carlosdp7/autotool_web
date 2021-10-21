import * as React from "react"
import { Layout } from "../components/layout"
import WhoWeAreSectionOne from "../components/pages/whoWeAre/WhoWeAreSectionOne"
import WhoWeAreSectionTwo from "../components/pages/whoWeAre/WhoWeAreSectionTwo"

export default function WhoWeAre() {
  return (
    <Layout>
      <WhoWeAreSectionOne />
      <WhoWeAreSectionTwo />
    </Layout>
  )
}
