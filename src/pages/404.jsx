import * as React from "react"
import { Layout } from "../components/layout"
import NotFound from "../components/pages/404/404SectionOne"

export default function NotFoundPage() {
  return (
    <Layout headerNavBg={true}>
      <NotFound />
    </Layout>
  )
}
