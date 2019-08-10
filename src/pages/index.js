import React from "react"
import AboutSection from "./home/about-section/about-section"
import WritingSection from "./home/writing-section/writing-section"
import PopularWorkSection from "./home/popular-work-section/popular-work-section"
import Layout from "../layout-components/layout"

const Home = () => {
  return (
    <Layout>
      <main className="home-content">
        <AboutSection />
        <WritingSection />
        <PopularWorkSection />
      </main>
    </Layout>
  )
}
export default Home
