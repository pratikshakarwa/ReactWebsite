import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import App from "./App"
import "./cont1.css"
import Scroll from "../../components/scroll"
const Application = ({ props }) => {
  return (
    <div className="cont1">
      <Layout>
        <Scroll showBelow={250} />
        <Wrapper>
          <App />
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

export default Application
