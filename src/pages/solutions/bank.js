import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Split, SplitTitle } from "./split1"
import { Container } from "react-bootstrap"
import Logo from "../../images/dollar.jpg"
const Bank = () => {
  return (
    <>
      <Container>
        <Split>
          <div>
            <img src={Logo} alt="logo" style={{ height: "400px" }} />
          </div>
          <div>
            <SplitTitle>BANKING & FINANCIAL SERVICES</SplitTitle>
            <h3>
              {" "}
              <strong>Investment Banking & Brokerage</strong>{" "}
            </h3>
            <p>
              {" "}
              Investment Banking & Brokerage continues to be transformed by
              technological innovations including those in the areas of cloud,
              mobility and big data. While these innovations present
              opportunities, capital market organizations are also faced with
              tremendous business challenges including constantly changing
              business dynamics, geopolitical uncertainty, risk and compliance
              issues as well as cost pressures.
            </p>
            <p>
              We have developed a deep knowledge base and extensive experience
              in Capital Markets. We provide creative solutions supporting
              several clients globally across a wide spectrum of their needs.
              Our team of experts understand your needs and challenges, and
              partner with you to develop tailored solutions to address your
              challenges.
            </p>

            <h3 style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
              {" "}
              <strong>
                {" "}
                Key Investment Banking & Brokerage Areas Supported
              </strong>
            </h3>
            <div className="row slideanim slide">
              <div className="col-md-4">
                <p>
                  <strong>Front office</strong>
                </p>
                <li align="left">Client & exchange Connectivity</li>

                <li align="left">Client Management</li>
                <li align="left">e-Trading</li>
                <li align="left">Order Management</li>
                <li align="left">Trade Capture & Execution</li>
                <li align="left">Position Management</li>
                <li align="left">Clearing & Settlement</li>
              </div>
              <div className="col-md-4">
                <p>
                  <strong>Middle & Back office</strong>
                </p>

                <li align="justify">P&L Reporting & Control</li>
                <li align="justify"> Market & Credit Risk Management</li>
                <li align="justify">Margin & Collateral Management</li>
                <li align="justify">Reconciliation</li>
                <li align="justify">Reference Data management</li>
                <li align="justify">Trade Matching & Confirmation</li>
              </div>

              <div className="col-md-4">
                <p>
                  <strong>Regulatory and Compliance</strong>
                </p>
                <li align="justify">
                  Patriot Act, Bank Secrecy Act, OFAC, Basel II
                </li>
                <li align="jsutify"> MiFiD, SEPA, GLB, SEC and SRO</li>
                <li align="justify">Risk Management</li>
                <li align="justify">Credit Risks,Operational Risks</li>
                <li align="justify">Enterprise Risk Management</li>
                <li align="justify">Investment Management</li>
                <li align="justify">
                  Wealth and Asset Management,Mutual Funds
                </li>
                <li align="justify">
                  Investment Advisory,Private Banking&Trust Funds
                </li>
              </div>
            </div>
          </div>
        </Split>
      </Container>
    </>
  )
}

export default Bank
