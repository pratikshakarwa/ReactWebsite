import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"
import Logo from "../../images/mobility1.jpg"

const Mob = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>MOBILITY</SplitTitle>
            <p>
              {" "}
              Mobility is redefining the rules of user experience with anytime,
              anywhere availability and is now a necessity for future-ready,
              borderless global enterprise. It is a constant endeavor to improve
              employee interactivity and create seamless experiences for
              customers while having real-time engagements with the field force.
            </p>

            <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <strong> Key Service Areas</strong>
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4" style={{ paddingBottom: "3rem" }}>
                <li> Strategy and Consulting</li>
                <li> Delivery Services</li>
                <li> Managed Services</li>
                <li> Mobility Solutions</li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Mob
