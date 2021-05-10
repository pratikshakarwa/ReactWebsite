import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import Bank from "./bank"
import "./cont.css"
import Bank1 from "./bank1"
import Scroll from "../../components/scroll"

const BankAndFinance = () => {
  return (
    <div className="cont">
      <Scroll showBelow={250} />
      <Layout>
        <Wrapper>
          <Bank />
          <Bank1 />
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

export default BankAndFinance
