import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"
import Logo from "../../images/infras.jpg"
const Infra = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>INFRASTRUCTURE SERVICE</SplitTitle>
            <p>
              {" "}
              With emerging technologies like Big Data, Mobility and cloud,
              expectations from IT are higher than ever. Our experts can help
              you build and manage an IT infrastructure that equals the demands
              of a changing business environment
            </p>
            <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <strong> Key Service Areas</strong>
            </h3>
            <div
              className="row slideanim slide"
              style={{ paddingBottom: "3rem" }}
            >
              <div className="col-md-4">
                <li> Data Center Services</li>
                <li>Service Desk</li>
                <li> Network Services</li>
                <li>End User Services</li>
                <li>Remote Infrastructure Management</li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Infra
