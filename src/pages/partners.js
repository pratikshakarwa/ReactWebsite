import React from "react"
import { Layout } from "../components"
import SEO from "../components/seo"
import styled from "styled-components"
import People from "../friends/Friend1"
import Scroll from "../components/scroll"

const Partners = () => {
  return (
    <>
      <SEO title="partners" />
      <Wrapper>
        <Scroll showBelow={250} />
        <Layout>
          <People />
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

export default Partners
