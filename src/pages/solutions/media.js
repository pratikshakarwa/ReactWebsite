import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "./split1"
import { Container } from "react-bootstrap"

import Logo from "../../images/media1.jpg"

const Media = () => {
  return (
    <>
      <Container>
        <Split style={{ paddingBottom: "5rem" }}>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>Media & Entertainment</SplitTitle>

            <p>
              {" "}
              Internet of Things, digital convergence, and on-demand mobility
              are creating new opportunities for media companies. To meet the
              demands of a 24/7 connected world, you need a nimble partner with
              their finger on the pulse of new technology. Let us become your
              Innovation Lab, identifying the emerging technologies and
              strategies you need to align product with demand, make intelligent
              business decisions, and deliver new and engaging experiences to
              your customers in their connected world.
            </p>

            <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <strong>Key Media & Entertainment Areas Supported</strong>
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4">
                <li>Digital Advertising Services</li>
                <li>Digital Asset Management</li>
                <li>Direct Marketing</li>
                <li>Mobility</li>
                <li>Reporting & Insights</li>
                <li>SEO & Enterprise Search</li>
                <li>User Experience </li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Media
