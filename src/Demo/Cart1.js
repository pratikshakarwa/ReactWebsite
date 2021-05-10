import React from "react"
import Sadata from "../constants/cardsdata"
import Cart from "./Cart"

const Cart1 = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center ">Our Pepole</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sadata.map((val, ind) => {
                return (
                  <Cart
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    icon={val.icon}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart1
