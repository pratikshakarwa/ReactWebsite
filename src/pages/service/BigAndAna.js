import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import "./cont1.css"
import Big from "./Big"
import Scroll from "../../components/scroll"
const BigAndAna = ({ props }) => {
  return (
    <div className="cont1">
      <Scroll showBelow={250} />
      <Layout>
        <Wrapper>
          <Big />
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

export default BigAndAna
