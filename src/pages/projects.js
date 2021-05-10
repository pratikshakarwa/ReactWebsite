import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Slider } from "../components"
import SEO from "../components/seo"
import Scroll from "../components/scroll"

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <>
      <SEO title="services" />
      <Wrapper>
        <Scroll showBelow={250} />
        <Layout>
          <Projects title="our services" projects={projects} page />
          <Slider />
        </Layout>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  min-height: 150vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-grey-5);
  }
`
export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 8
      sort: { fields: data___date, order: ASC }
    ) {
      nodes {
        id
        data {
          Name
          date
          type
          description
          LearnMore
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

export default ProjectsPage
