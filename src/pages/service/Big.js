import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "../solutions/split1"
import { Container } from "react-bootstrap"
import Logo from "../../images/bigdata.jpg"

const Big = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>BIGDATA & ANALYTICS</SplitTitle>
            <p>
              {" "}
              The volume and availability of data is skyrocketing by the minute,
              and so are the expectations that it will yield analytical insights
              for improved business decision making. Ability to gain insights
              from your data is critical as it lets you make faster and smarter
              decisions as you tackle your most complex business issues.
            </p>
            <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <strong> Key Service Areas</strong>
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4" style={{ paddingBottom: "3rem" }}>
                <li>Big Data</li>
                <li>Enterprise Information Management</li>
                <li>Business Intelligence</li>
                <li>Advanced Analytics</li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Big
