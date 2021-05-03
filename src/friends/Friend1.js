import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from '../casestudies/case1'
 import styled from "styled-components"
import Logo from "../images/partner.jpg"
import Logo1 from "../images/hasi.png"
import Logo2 from "../images/snow1.png"
import { Container } from "react-bootstrap"
import { Layout } from '../components';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from "gatsby"
const People = () => {
    return (
        <>
      <Container> 
            
            <Split>
            
            <div>
                <SplitImg src={Logo} alt="logo" />
            </div>
            <div>
                <SplitTitle>Why partners with us?</SplitTitle>
                {/* <CardDeck style={{paddingLeft:"4rem",paddingRight:"4rem",paddingTop:"4rem",paddingBottom:"4rem",background:"var(--clr-grey-10)"}}> */}
 
  {/* </CardDeck> */}
    <p>
               Atyeti is a global information technology solutions and services provider. We pride ourselves on delivering quantifiable value to our customers and consistently exceeding their expectations. We achieve this by focusing on industry verticals where we have strong domain expertise.

Atyeti’s unwavering commitment and focus to understand client needs and passion to execute allows us in partnering with our clients to increase their business performance, stay competitive and adapt to constant change.

For our employees & consultants, we offer an enriching experience that promotes career growth and lifelong learning.

 </p>
            </div>
           
             <div>
              
                </div>
                 </Split>
                  <Container> 
            
          
            
         
            <div  style={{textAlign:"center", backgroundColor:"snow",paddingLeft:"7rem",paddingRight:"7rem",paddingTop:"2rem",paddingBottom:"3rem"}}>
            <p>
            Joining Atyeti translates into exciting opportunities to expand and utilize your expertise. Our employees and contractors come together with a wide variety of skills and backgrounds to create a team of industry specialists.

We believe that our success and our ability to provide exceptional service stems from the enthusiasm, skill and dedication of our people. 




                </p>
               <div><p>  With our resources and emphasis on team work, we will support your professional development whatever your career goals.We are always looking for bright, skilled, innovative individuals with the tenacity to work and continue to add value to our customers.</p></div>
                </div>
           
     
      
            
        
        
         </Container>
        
                  <CardDeck style={{paddingLeft:"4rem",paddingRight:"4rem",paddingTop:"4rem",paddingBottom:"4rem",background:"var(--clr-grey-10)"}}>
  <Card>
    <Card.Img variant="top" src={Logo1} ></Card.Img>
    
    <Card.Body>
      {/* <Card.Title>Prashant Myadam</Card.Title> */}
      <Card.Text>
       HashiCorp is a remote-first company headquartered in San Francisco that 
       solves development, operations, and security challenges in infrastructure
        so organizations can focus on business-critical tasks.
        <Link to="https://www.hashicorp.com/">LearnMore</Link>
        </Card.Text>
        
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={Logo2} style={{paddingTop:"1rem",paddingLeft:"2rem",paddingRight:"1rem",  width:"400px"}}  />
    <Card.Body>
      {/* <Card.Title> Casey O'Shea</Card.Title> */}
      <Card.Text>
      Snowflake’s founders started from scratch and built a data platform
       that would harness the immense power of the cloud. 
        But their vision didn’t stop there. They engineered Snowflake to power the Data Cloud,
         where thousands of organizations have seamless access to explore, share, and unlock
          the true value of their data.
 <Link to="https://www.snowflake.com/">LearnMore</Link>

{' '}
      </Card.Text>
    </Card.Body>
    {/* { <Card.Footer>
      { <small className="text-muted">Last updated 3 mins ago</small> }
    </Card.Footer> } */}
  </Card>
  
</CardDeck>

      
         </Container> 
       
            
         
      
          
          </>
        
        
    )
}
 



export default People