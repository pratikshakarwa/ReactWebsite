import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"

import Logo from "../../images/repo.jpg"

const Reg = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>REGULATORY REPORTING AS A SERVICE (RRAAS)</SplitTitle>
            <p style={{ paddingBottom: "1rem" }}>
              {" "}
              Global and regional regulations are rapidly evolving; thereby,
              presenting a challenge to institutions to meet their regulatory
              reporting requirements in a timely and accurate manner. In order
              to avoid redundant, manual, or opaque processes, financial
              institutions are turning to automated, data-driven approaches to
              ensure greater transparency and accuracy. Atyeti is a leader in
              seamlessly consolidating data from disparate sources to create a
              consistent and holistic picture for your Regulatory Exposure to
              ensure accurate reporting and rapid implementation of necessary
              corrective actions. With years of experience in the regulatory
              space, Atyeti is adept at assembling, transforming, aggregating,
              auditing, and reporting across numerous financial products
              enabling our patterns to make informed decisions and ensure
              ongoing compliance.
            </p>

            <h3 style={{ paddingBottom: "1rem" }}>
              <strong>Risk & Regulatory Practice</strong>
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4">
                <li align="left"> Gresham Clareti Transaction Control (CTC)</li>
                <li align="left"> Regulatory Reporting</li>
                <li align="left"> Financial reporting</li>
                <li align="left">Prudential reporting</li>
                <li align="left">Transactional reporting</li>
                <li align="left">Statistical reporting</li>
                <li align="left">Granular reporting</li>
              </div>
              <div className="col-md-4" style={{ paddingBottom: "3rem" }}>
                <li align="justify">Multi-dimensional reporting</li>
                <li align="justify">Report automation</li>
                <li align="justify"> Visual analytics</li>
                <li align="justify">Robotic process Management</li>
                <li align="justify">Data analytics</li>
                <li align="justify">Business process Management</li>
                <li align="justify">Learn/Agile Transformation</li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Reg
