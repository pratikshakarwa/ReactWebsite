import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero1, Contact } from "../components"
import SEO from "../components/seo"
import Scroll from "../components/scroll"
const Wall = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <>
      <SEO title="Contact us" />
      <Layout>
        <Scroll showBelow={250} />
        <Hero1 projects={projects} />
        <Contact />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Wall
