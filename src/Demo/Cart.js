import React from 'react'
import Title from '../components/Title'
import Logo from "./business3.jpg"
import "./cartcss.css"


const Cart = () => {
    return (
       
        <div className="album py-5 bg-light">
           <Title title="Our People" />
            <div className="cartcontainer">
               
                <div className="row">
                   
                    <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top " src={Logo} alt="" />
                            <div className="card-body">
                                <p className="card-text">
                                    Prashant Myadam
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                            <img className="card-img-top" src={Logo} alt="" />
                            <div className="card-body">
                                <p className="card-text">
                                    Casey O'Shea
                                </p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                            <img className="card-img-top" src={Logo} alt="" />
                            <div className="card-body">
                                <p className="card-text">
                                    hi this one is demo
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cart