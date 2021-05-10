import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"

import Logo from "../../images/asset1.jpg"

const Soft = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>SOFTWARE ASSET SOLUTIONS</SplitTitle>
            <p>
              {" "}
              Atyeti’s Software Asset Management solution combines expert
              knowledge of software licensing with award winning technology to
              streamline and ease the process of establishing and managing an
              organization’s software license compliance.
            </p>

            <h3 style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
              <strong>Key Service Areas</strong>
            </h3>
            <div className="row slideanim slide">
              <div style={{ paddingBottom: "3rem" }}>
                <li>Implementation of SAM</li>
                <li>Create Organizational procurement policy & processes</li>
                <li>Create Governance</li>
                <li>Plan for ongoing management</li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Soft
