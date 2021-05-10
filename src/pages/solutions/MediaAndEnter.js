import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import Media from "./media"
import "./cont.css"
import Scroll from "../../components/scroll"
const MediaAndEnter = () => {
  return (
    <div className="cont">
      <Scroll showBelow={250} />
      <Layout>
        <Wrapper>
          <Media />
        </Wrapper>
      </Layout>
    </div>
  )
}
const Wrapper = styled.main`
  min-height: 150vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-grey-5);
  }
`

export default MediaAndEnter
