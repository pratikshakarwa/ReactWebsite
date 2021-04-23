
import styled from "styled-components"

export const Split =styled.div`
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
grid-gap:20px;
padding-top:7rem;

@media(max-width: 786px){
    
    grid-template-columns:1fr;

}

`

export const SplitTitle=styled.h1`
font-size:42px;
`

export const SplitImg=styled.img`
height:100%;
width:100%;
`
export const Wrapper = styled.main`
  min-height: 150vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-grey-5);
  }

`