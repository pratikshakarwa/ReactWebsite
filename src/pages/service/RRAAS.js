import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"

const RRAAS = ({props}) => {
  /*const path= props.location.pathname.slice(1);*/
  return (
  <Layout>
    <Wrapper>
      <div className="section-center">
        <p>
    Global and regional regulations are rapidly evolving; thereby, presenting a challenge to
     institutions to meet their regulatory reporting requirements in a timely and accurate manner.
      In order to avoid redundant, manual, or opaque processes, financial institutions are turning to automated,
       data-driven approaches to ensure greater transparency and accuracy.

Atyeti is a leader in seamlessly consolidating data from disparate sources to create a consistent
 and holistic picture for your Regulatory Exposure to ensure accurate reporting and rapid implementation
  of necessary corrective actions. With years of experience in the regulatory space,
   Atyeti is adept at assembling, transforming, aggregating, auditing, and reporting across numerous
    financial products enabling our patterns to make informed decisions and ensure ongoing compliance.
</p>
       <h2>Risk & Regulatory Practice</h2>
<div>
    <h4 >  Gresham Clareti Transaction Control (CTC)
</h4>
<h4>Regulatory Reporting
</h4>
<h4>   
Financial reporting
</h4>
<h4>   Mobility Solutions</h4>
<h4>Prudential reporting
</h4>
<h4>Transactional reporting</h4>
<h4>Statistical reporting
</h4>
<h4>Granular reporting </h4>
<h4>Multi-dimensional reporting</h4>
</div>
       
      </div>
       <Link to='/'className="btn" >Home</Link>
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
       display:block;
    font-size: 2rem;
    color: black;
    margin-bottom: 1rem;
    text-align:left;
    text-transform: initial;
   
  }
  .helth-bcg{
 -webkit-transition: var(--transition);
  transition: var(--transition);
  border-radius: var(--radius);
  height: 15rem;
  -o-object-fit: cover;
  object-fit: cover;
  }
  p {
    display: grid;
    margin-block-start: 10em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align:left;
    }
   
   h2 {
    font-size: 2.5rem;
    text-align:left;
    color:black;
  }
  
  h4 {
    font-size: 1rem;
    text-align:left;
    color:var(--clr-grey-3);
  }
  @media (min-width: 1400px ) {
    h1 {
      font-size: 1rem;
      font-weight:3rem;

    }

  }
`

export default RRAAS