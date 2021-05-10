import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import Infra from "./infra"
import "./cont1.css"
import Scroll from "../../components/scroll"
const Infrastrcture = () => {
  return (
    <div className="cont1">
      <Scroll showBelow={250} />
      <Layout>
        <Wrapper>
          <Infra />
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

export default Infrastrcture
