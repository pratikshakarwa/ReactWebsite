import React from "react"
import styled from "styled-components"
import Foot from "./Foot"
import { Link } from "gatsby"
import address from "../constants/address"
const Footer = () => {
  return (
    <>
      <Wrapper>
        <Foot />

        <div className="nav-header">
          <ul className="nav-links">
            {" "}
            <li>
              {" "}
              <Link to="/connect" className="btn">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="https://careers.smartrecruiters.com/AtyetiInc"
                className="btn"
              >
                Career
              </Link>
            </li>
            <li>
              <Link to="/projects" className="btn">
                Service
              </Link>
            </li>
            <li>
              <Link to="/" className="btn">
                Solutions
              </Link>
            </li>
          </ul>
        </div>
        <Wrapper1>
          <h2 style={{ color: "skyblue" }}>Atyeti Inc.</h2>
          <p style={{ paddingBottom: "3rem" }}>
            &copy; {new Date().getFullYear()} Atyeti Exceeding Expectations. All
            rights reserved.
          </p>
          {address.map(({ id, icon, icon1, icon3, icon4 }) => {
            return (
              <article key={id}>
                <p>
                  {icon}
                  {"    "}
                  {icon3}
                  {"   "}
                  {icon1} {icon4}
                </p>
              </article>
            )
          })}
        </Wrapper1>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.footer`
  height: auto;
  width: auto;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  padding-top: 1rem;

  .icon {
    font-size: 1.5rem;
    color: var(--clr-grey-5);
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  button {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 1000;
    padding: 5px 10px;
    width: 90%;
    text-transform: capitalize;
    position: relative;
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: auto;
    }
  }
  @media (min-width: 800px) {
    li {
      padding-top: 3rem;
      position: relative;
      margin-left: 2rem;
    }
    .btn {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 1000;
      padding: 5px 10px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 500px;
    }
  }
`
const Wrapper1 = styled.footer`
  height: auto;
  width: auto;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  padding-bottom: 6rem;
`
export default Footer
