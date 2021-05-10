import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "./split1"
import { Container } from "react-bootstrap"
import Logo1 from "../../images/bit1.jpg"
const Bank1 = () => {
  return (
    <>
      <Container>
        <Split style={{ paddingBottom: "5rem" }}>
          <div>
            <img src={Logo1} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>Retail & Wholesale Banking</SplitTitle>
            <p>
              Digital banking, regulatory compliance and the mobile web are
              changing banking and financial services every day. We know the
              innovative technologies you need to meet the needs of the
              ever-evolving digital consumer, the cloud applications that will
              make life easier, and the domain expertise that will allow agile
              responses. We can show you the strategies and technologies that
              will help you keep up, keep customers happy, and keep a steady
              stream of new banking customers coming your way.
            </p>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Bank1
