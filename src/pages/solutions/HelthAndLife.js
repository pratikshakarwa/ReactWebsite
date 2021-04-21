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
         Healthcare and life sciences organizations face complex challenges to evolve their systems and 
         processes to meet both regulatory and patient care demands. Increasing costs and limited budgets
          add to the complexity.
Healthcare & Life Sciences
fields are experiencing rapid changes thanks to advances in science combined and emerging technologies revolutionizing the industry. 
Personalized medicine and patient-centric care are also pushing those domains in new directions as are strict compliance requirements and government initiatives such as the Affordable Care Act and Electronic Health Records (EHR) programs. 
It is critical for companies to adapt to an ever-changing environment and adopt the latest technology breakthroughs in areas such as cloud
 computing, mobility and big data.</p>
       <h2>Key Health Care & Life Sciences Areas Supported</h2>
<div>
    <h3>Payer Solutions</h3>
<h3>Provider Solutions</h3>
<h3>Benefits Administration Services</h3>
<h3>Electronic Medical Records</h3>
<h3>Clinical Decision Support System</h3>
<h3>Pharmacy Management System</h3>
<h3>Human Resource Management System </h3>
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
