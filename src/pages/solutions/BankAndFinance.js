import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"

const BankAndFinance = ({props}) => {
  /*const path= props.location.pathname.slice(1);*/
  return (
  <Layout>
    <Wrapper>
      <div className="section-center">
        <p>
          Financial technology (abbreviated fintech or FinTech) is the technology and innovation that 
          aims to compete with traditional financial methods in the delivery of financial services.
          It is an emerging industry that uses technology to improve activities in finance.
          The use of smartphones for mobile banking, investing, borrowing services,
           and cryptocurrency are examples of technologies aiming to make financial services more accessible to the general public. 
           Financial technology companies consist of both startups and established financial institutions and technology companies
            trying to replace or enhance the usage of financial services provided by existing financial companies.</p>
        
     <Link to='/'className="btn" >Home</Link>
      </div>
    </Wrapper>
  </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-primary-8);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  div {
    text-align: center;
    color: var(--clr-white);
  }
  h1 {
    font-size: 2rem;
    color: black;
    margin-bottom: 1rem;
    text-align:left;
    text-transform: initial;
    display:block;
  }
  .bank-bcg{
 -webkit-transition: var(--transition);
  transition: var(--transition);
  border-radius: var(--radius);
  height: 15rem;
  -o-object-fit: cover;
  object-fit: cover;
  }
  p {
    display: grid;
    margin-block-start: 7em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align:left;
    }
  @media (min-width: 1200px) {
    h1 {
      font-size: 1rem;
      font-weight:3rem;
    }
  }
`

export default BankAndFinance
