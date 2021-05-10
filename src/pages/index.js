import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero, Projects, Solution } from "../components"
import SEO from "../components/seo"
import Scroll from "../components/scroll"
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <>
      <SEO title="Atyeti" />
      <Layout>
        <Scroll showBelow={250} />
        <Hero projects={projects} />
        <Solution />
        <Projects projects={projects} title="services" />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date, order: ASC }
    ) {
      nodes {
        id
        data {
          Name
          date
          type
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

export default HomePage
