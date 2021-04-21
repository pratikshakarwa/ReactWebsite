import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"

const HealthAndLife = ({props}) => {
  /*const path= props.location.pathname.slice(1);*/
  return (
  <Layout>
    <Wrapper>
      <div className="section-center">
        <p>
       Internet of Things, digital convergence, and on-demand mobility are creating new opportunities
        for media companies. To meet the demands of a 24/7 connected world, you need a nimble partner with
         their finger on the pulse of new technology. Let us become your Innovation Lab, identifying the
          emerging technologies and strategies you need to align product with demand, make intelligent business
           decisions, and deliver new and engaging experiences to your customers in their connected world.</p>
       <h2>Key Media & Entertainment Areas Supported</h2>
<div>
    <h3>Digital Advertising Services</h3>
<h3>Digital Asset Management</h3>
<h3>Direct Marketing</h3>
<h3>Mobility</h3>
<h3>Reporting & Insights</h3>
<h3>SEO & Enterprise Search</h3>
<h3>User Experience </h3>
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
    h3 {
        padding-top:10px;
    font-size: 1.75rem;
     color: var(--clr-grey-3);
    text-align:left;
  }
   h2 {
    font-size: 2.5rem;
    text-align:left;
    color:black;
  }
  @media (min-width: 1400px ) {
    h1 {
      font-size: 1rem;
      font-weight:3rem;
    }
    
  }
`

export default HealthAndLife