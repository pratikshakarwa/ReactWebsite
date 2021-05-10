import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import Helth from "./helth"
import "./cont.css"
import Scroll from "../../components/scroll"
const HelthAndLife = () => {
  return (
    <div className="cont">
      <Scroll showBelow={250} />
      <Layout>
        <Wrapper>
          <Helth />
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

export default HelthAndLife
