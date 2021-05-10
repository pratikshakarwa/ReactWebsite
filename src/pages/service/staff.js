import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"

import Logo from "../../images/staff1.jpg"

const Staff = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>STAFFING SOLUTIONS</SplitTitle>
            <p>
              {" "}
              Atyeti’s unmatched database of candidates with time tested
              processes and technology assure our clients of quality hires each
              time. From sourcing a single Contractor to facilitating multiple
              hires, we have the capability to scale our recruiting efforts
              depending upon our clients’ needs
            </p>

            <h3 style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
              <strong>Key Service Areas</strong>
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4" style={{ paddingBottom: "3rem" }}>
                <li> Contract Staff Augmentation</li>
                <li>Contract to Hire</li>
                <li> Permanent / Full Time</li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Staff
