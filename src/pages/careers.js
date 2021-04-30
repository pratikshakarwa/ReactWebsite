import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,

  GridProjects,
} from "../components"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Case from "../casestudies/case"
import styled from "styled-components"
const Career = () => {
  return (
    <Wrapper>
      <Layout>
   <Case />
   </Layout>
   </Wrapper>
   
  )
}

const Wrapper = styled.main`
  min-height: 150vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-grey-5);
  }

`

export default Career
