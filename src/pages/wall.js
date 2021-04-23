import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero1,
  About,
  Projects,
  Survey,
  GridProjects,
  Wallpaper,
} from "../components"
import SEO from "../components/seo"
const Wall = ({ data }) => {
  const { 
    allAirtable: { nodes: projects },
} = data
  return (
    <Layout>
      <Hero1 projects={projects}/>
    </Layout>
  )
}


export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, limit: 3, sort: {fields: data___date, order: DESC}) {
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
