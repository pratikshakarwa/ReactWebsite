import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from './case1'
 import styled from "styled-components"
import Logo from "../images/comapny3.jpg"
import { Container } from "react-bootstrap"
import { Layout } from '../components';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const Case = () => {
    return (
        <>
      <Container> 
            
            <Split>
            
            <div>
                <SplitImg src={Logo} alt="logo" />
            </div>
            <div>
                <SplitTitle>Case Studies Details</SplitTitle>
                {/* <CardDeck style={{paddingLeft:"4rem",paddingRight:"4rem",paddingTop:"4rem",paddingBottom:"4rem",background:"var(--clr-grey-10)"}}> */}
  <Card>
   
    
        <Card.Footer>
      <small className="text-muted">Client:</small>
       <small className="text-muted">Atyeti.com</small>
      <Card.Text> <small className="text-muted">Credit Suisse</small></Card.Text> 
    </Card.Footer>
      {/* <Card.Title>Prashant Myadam</Card.Title> */}
       <Card.Footer>
      <small className="text-muted">Location:</small>
    <Card.Text>   <small className="text-muted">Pune,INDIA</small></Card.Text>
      
    </Card.Footer>
    
    <Card.Footer>
      <small className="text-muted">Technologies:</small>
     <Card.Text><small className="text-muted">Data Science,PYTHON,JAVA</small></Card.Text>
    </Card.Footer>
      <Card.Footer>
      <small className="text-muted">Completed</small>
    </Card.Footer>
      <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  {/* </CardDeck> */}
            </div>
           
             <div>
                <p>
                Atyeti is a global information technology solutions and services provider. We pride ourselves on delivering quantifiable value to our customers and consistently exceeding their expectations. 
                We achieve this by focusing on industry verticals where we have strong domain expertise.
                Atyeti’s unwavering commitment and focus to understand client needs and passion to execute allows us in partnering with our clients to increase their business performance, stay competitive and adapt to constant change.
                For our employees & consultants, we offer an enriching experience that promotes career growth and lifelong learning.
                </p>
                </div>
                 </Split>
      
         </Container> 
       
            
         
      
          
         <Container> 
            
            <Split>
            
            <div>
                <SplitImg src={Logo} alt="logo" />
            </div>
            <div>
                <SplitTitle>Important Facts</SplitTitle>
                <p>
              The Field of Data Science</p>
<p>The Problem</p>
<p>The Solution</p>
<p>The Skills </p>
<p>Statistics</p>
<p>Mathematics</p>
                
            </div>
            <div>
            <p>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.


                </p>
               <div><p>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p></div>
                </div>
           
        </Split>
      
            
        
        
         </Container>
          </>
        
        
    )
}
 



export default Case