import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"
import Logo from "../../images/app7.jpg"

const App = () => {
  return (
    <>
      <Container>
        <Split style={{ paddingBottom: "5rem" }}>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>APPLICATION SERVICES</SplitTitle>
            <p>
              {" "}
              Applications are integral to how companies define and meet their
              changing business needs, which will improve ROI and retain
              customer loyalty Atyeti, can help you design, build, test and
              manage your applications to be competitive in a high-velocity,
              software-driven world.
            </p>
            <h3 style={{ paddingBottom: "1rem" }}>
              <strong> Key Service Areas</strong>{" "}
            </h3>
            <div className="row slideanim slide">
              <div>
                <li>Architecture Strategy and Design</li>
                <li>Application Modernization and Portfolio Management</li>
                <li>Application Development and System integration</li>
                <li>Application Support and Maintenance</li>
                <li>Application Testing Services</li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default App
