import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <h2>This is About</h2>
      <p>
        Need a developer?{" "}
        <a
          href="https://twitter.com/renatognunes"
          rel="noopener noreferrer"
          target="_blank"
        >
          Follow me
        </a>
      </p>
    </Layout>
  )
}

export default AboutPage
