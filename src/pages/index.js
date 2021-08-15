import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopSection from "../components/home/top-section"
import MidSection from "../components/home/mid-section"
import BottomSection from "../components/home/bottom-section"

const IndexPage = () => (
  <Layout>
    <Seo title="Affirmation website" />
    <TopSection/>
    <MidSection/>
    <BottomSection/>
  </Layout>
)

export default IndexPage
