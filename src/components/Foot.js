import React from "react"
import styled from "styled-components"

import address from "../constants/address"
const Foot = () => {
  return (
    <Wrapper>
      <div className="section-center">
        {address.map(({ id, country, address }) => {
          return (
            <article key={id}>
              {/* <span>{country}</span> */}
              <h4>{country}</h4>
              <p>{address}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .section-center {
    margin-top: 1rem;
    display: grid;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1.5rem;
    padding-left: 3rem;
    padding-right: 3rem;

    .icon {
      font-size: 4rem;
      color: var(--clr-grey-5);
      margin-bottom: 1rem;
    }
    h4 {
      color: var(--clr-grey-7);
      text-transform: uppercase;
      font-weight: 500;
      display: block;
      /* margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
      text-align: left;
    }
    p {
      color: var(--clr-grey-8);
      max-width: 34em;
      padding-top: -3rem;
      font-weight: 500;
      text-align: left;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default Foot
