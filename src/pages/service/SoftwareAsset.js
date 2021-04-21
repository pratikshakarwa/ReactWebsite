import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"

const SoftwareAsset = ({props}) => {
  /*const path= props.location.pathname.slice(1);*/
  return (
  <Layout>
    <Wrapper>
      <div className="section-center">
        <p>
    Atyeti’s Software Asset Management solution combines expert knowledge of software licensing
     with award winning technology to streamline and ease the process of establishing and managing an
      organization’s software license compliance.
</p>
       <h2>Key Service Areas</h2>
<div>
    <h4 > Implementation of SAM
</h4>
<h4>Create Organizational procurement policy & processes
</h4>
<h4>   
 Create Governance</h4>
<h4>   Mobility Solutions</h4>
<h4>Prudential reporting
</h4>
<h4>Plan for ongoing management</h4>
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

export default SoftwareAsset