import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"

const Infrastrcture = ({props}) => {
  /*const path= props.location.pathname.slice(1);*/
  return (
  <Layout>
    <Wrapper>
      <div className="section-center">
        <p>
     With emerging technologies like Big Data, Mobility and cloud, expectations from IT are higher than ever.
      Our experts can help you build and manage an IT infrastructure that equals the demands of a changing
       business environment

</p>
       <h2>Key Service Areas</h2>
<div>
    <h3>  Data Center Services
</h3>
<h3> Service Desk
</h3>
<h3> Cloud Integration</h3>
<h3>  Network Services</h3>
<h3> End User Services</h3>
<h3>Remote Infrastructure Management</h3>

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

export default Infrastrcture