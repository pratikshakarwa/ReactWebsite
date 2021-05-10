import React from "react"
import { Layout } from "../components"
import SEO from "../components/seo"
import Case from "../casestudies/case"
import styled from "styled-components"
import Scroll from "../components/scroll"
const Career = () => {
  return (
    <>
      <SEO title="case study" />
      <Wrapper>
        <Scroll showBelow={250} />
        <Layout>
          <Case />
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

export default Career
