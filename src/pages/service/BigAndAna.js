import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"

const BigAndAna = ({props}) => {
  /*const path= props.location.pathname.slice(1);*/
  return (
  <Layout>
    <Wrapper>
      <div className="section-center">
        <p>
     The volume and availability of data is skyrocketing by the minute, and so are the expectations that
      it will yield analytical insights for improved business decision making. Ability
       to gain insights from your data is critical as
      it lets you make faster and smarter decisions as you tackle your most complex business issues.</p>
       <h2>Key Service Areas</h2>
<div>
    <h3>Big Data


</h3>
<h3> Enterprise Information Management</h3>
<h3> Business Intelligence</h3>
<h3> Advanced Analytics</h3>


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

export default BigAndAna