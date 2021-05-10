import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "./split1"
import { Container } from "react-bootstrap"
import Logo from "../../images/helth3.jpg"

const Helth = () => {
  return (
    <>
      <Container>
        <Split style={{ paddingBottom: "5rem" }}>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>HEALTH & LIFE SCIENCE</SplitTitle>

            <p>
              {" "}
              Healthcare and life sciences organizations face complex challenges
              to evolve their systems and processes to meet both regulatory and
              patient care demands. Increasing costs and limited budgets add to
              the complexity. Healthcare & Life Sciences fields are experiencing
              rapid changes thanks to advances in science combined and emerging
              technologies revolutionizing the industry.
            </p>
            <p>
              Personalized medicine and patient-centric care are also pushing
              those domains in new directions as are strict compliance
              requirements and government initiatives such as the Affordable
              Care Act and Electronic Health Records (EHR) programs. It is
              critical for companies to adapt to an ever-changing environment
              and adopt the latest technology breakthroughs in areas such as
              cloud computing, mobility and big data..
            </p>

            <h3 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <strong>Key Health Care & Life Sciences Areas Supported</strong>{" "}
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4">
                <li>Payer Solutions</li>
                <li>Provider Solutions</li>
                <li>Benefits Administration Services</li>
                <li>Electronic Medical Records</li>
                <li>Clinical Decision Support System</li>
                <li>Pharmacy Management System</li>
                <li>Human Resource Management System </li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Helth
