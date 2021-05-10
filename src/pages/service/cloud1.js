import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"
import Logo from "../../images/cloud2.jpg"

const Cloud1 = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>CLOUD SERVICES</SplitTitle>
            <p>
              {" "}
              Atyeti’s approach is centered on building & providing competency
              based services such as Cloud Assessment, Implementation &
              Migration to Private, Public and Hybrid Clouds and Cloud
              Operations services.
            </p>

            <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <strong> Key Service Areas</strong>
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4" style={{ paddingBottom: "3rem" }}>
                <li align="left">Cloud Advisory</li>
                <li align="left">Cloud Application Migration</li>

                <li align="left">Cloud Integration</li>
                <li align="left"> Public Cloud Applications</li>
              </div>
              <div className="col-md-4">
                <li align="justify">Application Testing Services</li>
                <li align="justify">Cloud Management Services</li>
                <li align="justify">Cloud Security</li>{" "}
              </div>{" "}
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Cloud1
