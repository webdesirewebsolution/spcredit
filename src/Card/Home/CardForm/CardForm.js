import React from 'react';
import "./CardForm.css";
import { IoLogoWhatsapp } from 'react-icons/io';
import { BiLogoInstagramAlt } from 'react-icons/bi';


function CardForm() {
    return (
        <>
            <div className='cardapply'>
                <div class="container text-center">
                    <div class="row cardrow">
                        <div class="col-4">
                            <div class="card applycard" style={{ width: "21rem" }}>
                                <h5 class="card-title mt-2 cardtitle">HDFC Credit Card</h5>
                                <img src="./images/hdfccard.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body cardbody">

                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className='text-center feetext'>
                                        <span >Annual Fee: Free</span> <br />
                                        <span>Joining Fee: Free</span>
                                    </div>
                                    {/* <a href="#" class="btn btnapply mt-2">Apply Now</a> */}
                                    <button type="button" class="btn spbutton">Apply Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-8">

                            <div style={{ width: "100%", display: "flex" }}>
                                <form>
                                    <div style={{ width: "100%" }}>
                                        <h3>Get Assistance</h3>
                                    </div>
                                    <div style={{ width: "47%" }} className='cardform'>
                                        <p>FIRST NAME</p>
                                        <input name="name" autofocus />
                                    </div>
                                    <div style={{ width: "47%" , marginLeft: "6%"}} className='cardform'>
                                        <p>LAST NAME</p>
                                        <input name="name" autofocus />
                                    </div>
                                    <div style={{ width: "47%" }} className='cardform'>
                                        <p>EMAIL</p>
                                        <input name="email" />
                                    </div>
                                    <div style={{ width: "47%", marginLeft: "6%" }} className='cardform'>
                                        <p>PHONE</p>
                                        <input name="phone" />
                                    </div>
                                    <div style={{ width: "47%" }} className='cardform'>
                                        <p>PAN NUMBER</p>
                                        <input name="email" />
                                    </div>
                                    <div style={{ width: "47%", marginLeft: "6%" }} className='cardform'>
                                        <p>ADDRESS</p>
                                        <input name="phone" />
                                    </div>
                                    <div>
                                        <IoLogoWhatsapp size="40px" color="green" className='me-4'/> 
                                        <BiLogoInstagramAlt  size="40px"/>
                                    </div>
                                    <p>
                                    <button type="button" class="btn spbutton">Submit</button>                                     
                                    </p>
                                    
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardForm;